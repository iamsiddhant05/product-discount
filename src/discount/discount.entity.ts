import { Product } from '../product/product.entity';
import { Column, Generated, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Entity, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { DiscountType } from './discountType.enum';

@Entity('discount')
export class Discount extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @Column({ name: 'discount_type', default: DiscountType.NONE, length: 30 })
  discountType: DiscountType;

  @Column({ name: 'value', nullable: true })
  value: number;

  @Column({ name: 'max_unit', nullable: true })
  maxUnit: number;

  @Column({ name: 'min_value', nullable: true })
  minValue: number;

  @OneToMany(() => Product, product => product.discount)
  product: Product[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}