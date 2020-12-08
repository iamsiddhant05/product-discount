import { Cart } from '../cart/cart.entity';
import { Column, Generated, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Entity, OneToMany, BaseEntity } from 'typeorm';

@Entity('users')
export class Users extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @Column({ name: 'name', default: '' })
  name: string;

  @OneToMany(() => Cart, cart => cart.user)
  cart: Cart[];
}