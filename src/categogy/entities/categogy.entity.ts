import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  idCategory: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: true })
  isActive: boolean;
  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
