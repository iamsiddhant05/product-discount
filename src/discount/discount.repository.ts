import {
  EntityRepository,
  Repository,
} from 'typeorm';
import { Discount } from './discount.entity';
import { DiscountType } from './discountType.enum';

@EntityRepository(Discount)
export class DiscountRepository extends Repository<Discount> {
  async findById(id: string): Promise<Discount> {
    return this.findOne({
      where: {
        id,
      },
    });
  }

  async findAllMinOrder(): Promise<Discount[]> {
    return this.find({
      where: {
        discountType: DiscountType.MIN_ORDER,
        isActive: true
      },
      order: {
        minValue: 'DESC'
      }
    });
  }
}