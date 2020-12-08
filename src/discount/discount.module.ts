import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "../product/product.module";
import { DiscountRepository } from "./discount.repository";
import { DiscountService } from "./discount.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([DiscountRepository]),
    forwardRef(() => ProductModule),
  ],
  providers: [DiscountService],
  exports: [DiscountService],
})
export class DiscountModule {}
