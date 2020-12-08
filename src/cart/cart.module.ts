import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiscountModule } from "../discount/discount.module";
import { ProductModule } from "../product/product.module";
import { UserModule } from "../user/user.module";
import { CartController } from "./cart.controller";
import { CartRepository } from "./cart.repository";
import { CartService } from "./cart.service";
import { CheckoutUtils } from "./checkout.utils";


@Module({
  imports: [
    TypeOrmModule.forFeature([CartRepository]),
    UserModule,
    forwardRef(() => ProductModule),
    forwardRef(() => DiscountModule),
  ],
  controllers: [CartController],
  providers: [CartService, CheckoutUtils]
})
export class CartModule {}