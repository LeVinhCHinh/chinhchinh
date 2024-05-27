import { Length } from 'class-validator';
import { Category } from 'src/categogy/entities/categogy.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  idProduct: number;
  @Column()
  @Length(1, 10, { message: 'Phải ít hơn 10 kí tự' })
  firstName: string;
  @Column()
  @Length(1, 10, { message: 'Phải ít hơn 10 kí tự' })
  lastName: string;
  @Column()
  age: string;
  @Column({ default: true })
  isActive: boolean;
  @Column({ nullable: false })
  idCategory: number;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;
}
