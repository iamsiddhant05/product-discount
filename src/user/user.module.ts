import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from 'src/cart/cart.module';
import { ConfigModule } from '../config/config.module';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    ConfigModule,
    forwardRef(() => CartModule)
  ],
  providers: [UserService],
  // controllers: [CallLogController],
  exports: [UserService],
})
export class UserModule {}
