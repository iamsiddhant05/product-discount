import { Injectable } from '@nestjs/common';
import { Discount } from '../discount/discount.entity';
import { Product } from '../product/product.entity';
import { CheckoutItemDto } from './dto/checkout-item.dto';

@Injectable()
export class CheckoutUtils {
  NONE(product: Product, discountStrategy: Discount, qty: number): CheckoutItemDto {
    return {
      product: product.id,
      productName: product.name,
      price: product.price,
      qty: qty,
      amount: product.price * qty,
      amountAfterDiscount: product.price * qty
    }
  }

  PERCENT(product: Product, discountStrategy: Discount, qty: number): CheckoutItemDto  {
    const cartItem = {
      product: product.id,
      productName: product.name,
      price: product.price,
      qty: qty,
      amount: product.price * qty,
      amountAfterDiscount: product.price * qty
    };

    if (qty > discountStrategy.maxUnit) {
      cartItem.amountAfterDiscount =
        (product.price * (qty - discountStrategy.maxUnit)) +
        ((product.price * ((100 - discountStrategy.value)/100)) * qty);
    } else {
      cartItem.amountAfterDiscount = ((product.price * (discountStrategy.value/100)) * qty);
    }

    return cartItem;
  }

  ABSOLUTE(product: Product, discountStrategy: Discount, qty: number): CheckoutItemDto  {
    const cartItem = {
      product: product.id,
      productName: product.name,
      price: product.price,
      qty: qty,
      amount: product.price * qty,
      amountAfterDiscount: product.price * qty
    };

    if (qty > discountStrategy.maxUnit) {
      cartItem.amountAfterDiscount =
        (product.price * (qty - discountStrategy.maxUnit)) +
        ((product.price - discountStrategy.value) * qty);
    } else {
      cartItem.amountAfterDiscount = ((product.price - discountStrategy.value) * qty);
    }

    return cartItem;
  }

  MULTIPLE_ITEM(product: Product, discountStrategy: Discount, qty: number): CheckoutItemDto  {
    const cartItem = {
      product: product.id,
      productName: product.name,
      price: product.price,
      qty: qty,
      amount: product.price * qty,
      amountAfterDiscount: product.price * qty
    };

    cartItem.amountAfterDiscount = (product.price * qty) -
      (Math.floor(qty/discountStrategy.minValue) * discountStrategy.value);

    return cartItem;
  }
}