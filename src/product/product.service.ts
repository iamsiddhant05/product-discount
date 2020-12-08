import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) { }

  async findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: string) {
    return this.productRepository.findById(id)
  }

  async remove(id: string): Promise<Product> {
    let product_detail = await this.productRepository.findById(id);

    product_detail.isActive = false;

    return product_detail.save();
  }
}
