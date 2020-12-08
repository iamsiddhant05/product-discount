import {
  EntityRepository,
  Repository,
} from 'typeorm';
import { Cart } from './cart.entity';
import { CartProductStatus } from './cartProductStatus.enum';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
  async findById(id: string): Promise<Cart> {
    return this.findOne({
      where: {
        id,
      },
    });
  }

  async findAll() {
    return this.find({
      where: {
        isActive: true
      },
    });
  }

  async findAllForUser(userId) {
    return this.find({
      relations: ['product', 'user'],
      where: {
        user: userId,
        status: CartProductStatus.IN_CART
      },
    });
  }

  async checkEntry(userId: string, productId: string) {
    return this.findOne({
      where: {
        user: userId,
        product: productId,
        status: CartProductStatus.IN_CART
      },
    });
  }
}