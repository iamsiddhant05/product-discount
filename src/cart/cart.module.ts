import { forwardRef, Module } from "@nestjs/common";
import { ProductController } from "../product/product.controller";
import { ProductModule } from "../product/product.module";
import { ProductService } from "../product/product.service";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    // TypeOrmModule.forFeature([ProductRepository]),
    UserModule,
    forwardRef(() => ProductModule),
  ],
  // controllers: [ProductController],
  // providers: [ProductService]
})
export class CartModule {}