import { OmitType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class UpdateProductDto extends OmitType(Product, ['idProduct']) {}
