import { forwardRef, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { DiscountModule } from '../discount/discount.module';
import { CartModule } from '../cart/cart.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),
    forwardRef(() => DiscountModule),
    forwardRef(() => CartModule),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
