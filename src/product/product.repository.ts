import {
  EntityRepository,
  Repository,
} from 'typeorm';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async findById(id: string): Promise<Product> {
    return this.findOne({
      where: {
        id,
        isActive: true
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
}