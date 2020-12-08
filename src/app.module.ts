import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CartModule } from './cart/cart.module';
import { DiscountModule } from './discount/discount.module';

@Module({
  imports: [
    ProductModule,
    UserModule,
    DatabaseModule,
    ConfigModule,
    CartModule,
    DiscountModule
  ],
})
export class AppModule {}
