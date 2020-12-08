import { Product } from '../product/product.entity';
import { Users } from '../user/user.entity';
import { Column, Generated, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Entity, ManyToOne, BaseEntity } from 'typeorm';
import { CartProductStatus } from './cartProductStatus.enum';

@Entity('cart')
export class Cart extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ name: 'status', default: CartProductStatus.IN_CART, length: 30 })
  status: CartProductStatus;

  @ManyToOne(() => Users, user => user.cart)
  user: Users;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @ManyToOne(() => Product, product => product.cart)
  product: Product;
}