import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ProductModule, UserModule, DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
