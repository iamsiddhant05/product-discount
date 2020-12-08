import { Cart } from '../cart/cart.entity';
import { Discount } from '../discount/discount.entity';
import { Column, Generated, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Entity, ManyToOne, OneToMany, BaseEntity } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ name: 'name', default: '' })
  name: string;

  @Column({ name: 'price', default: '0' })
  price: number;

  @Column({ name: 'status', type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => Cart, cart => cart.product)
  cart: Cart[];

  @ManyToOne(() => Discount, discount => discount.product)
  discount: Discount;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}