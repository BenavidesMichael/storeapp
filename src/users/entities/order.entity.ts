import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Product, (product) => product.order)
  products: Product[];
}
