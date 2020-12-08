import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "../product/product.module";
import { UserModule } from "../user/user.module";
import { CartController } from "./cart.controller";
import { CartRepository } from "./cart.repository";
import { CartService } from "./cart.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([CartRepository]),
    UserModule,
    forwardRef(() => ProductModule),
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}