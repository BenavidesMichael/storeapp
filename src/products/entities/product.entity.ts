import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 500 })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column()
  image: string;
}
