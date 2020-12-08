import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountService } from '../discount/discount.service';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';
import { Cart } from './cart.entity';
import { CartRepository } from './cart.repository';
import { CheckoutUtils } from './checkout.utils';
import { CheckoutItemDto } from './dto/checkout-item.dto';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartRepository)
    private cartRepository: CartRepository,
    private userService: UserService,
    private productService: ProductService,
    private checkoutUtils: CheckoutUtils,
    private discountService: DiscountService,
  ) { }

  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.findAll();
  }

  async findAllForUser(userId: string): Promise<Cart[]> {
    return this.cartRepository.findAllForUser(userId);
  }

  async modify(cartUpdateBody: CreateCartDto) {
    const userDetail = await this.userService.getById(cartUpdateBody.user);

    const productDetail = await this.productService.findOne(cartUpdateBody.product);

    if (!userDetail || !productDetail) {
      throw new BadRequestException('Problem with id entered');
    }

    const checkCartEntry = await this.cartRepository.checkEntry(userDetail.id, productDetail.id);

    if (checkCartEntry) {
      if (cartUpdateBody.qty < 0 && (cartUpdateBody.qty + Number(checkCartEntry.qty)) <= 0) {
        // remove from cart
        await this.cartRepository.remove(checkCartEntry);

        return this.cartRepository.findAllForUser(userDetail.id);
      }

      checkCartEntry.qty = Number(checkCartEntry.qty) + cartUpdateBody.qty

      await checkCartEntry.save();

      return this.cartRepository.findAllForUser(userDetail.id);
    }

    if (cartUpdateBody.qty > 0) {

      const cartEntry = new Cart();

      cartEntry.product = productDetail;
      cartEntry.user = userDetail;
      cartEntry.qty = cartUpdateBody.qty;

      await cartEntry.save();

      return this.cartRepository.findAllForUser(userDetail.id);
    }

    throw new BadRequestException('Product not in cart to remove');
  }

  async checkout(userId: string) {
    const cartDetail = await this.cartRepository.findAllForUser(userId);
    let finalCheckout: CheckoutItemDto[] = [];

    // ITEM WISE DISCOUNT STRATEGY
    for (const item of cartDetail) {
      if (item.product.discount) {
        const cartitem = this.checkoutUtils[item.product.discount.discountType](item.product, item.product.discount, item.qty);

        finalCheckout.push(cartitem);
      }
    }

    // FINAL PRICE DISCOUNT STRATEGY

    const minValueDiscount = await this.discountService.getMinOrderDiscount();

    const finalTotal = finalCheckout.reduce((total, item) => total + item.amountAfterDiscount, 0);

    let finalDiscountedAmount = finalTotal;

    for (const discountStrategy of minValueDiscount) {
      if (discountStrategy.minValue <= finalTotal) {
        finalDiscountedAmount = finalTotal - discountStrategy.value;
        break;
      }
    }

    return {
      cartItemList: finalCheckout,
      totalAmount: finalTotal,
      finalDiscountedAmount
    };
  }

}