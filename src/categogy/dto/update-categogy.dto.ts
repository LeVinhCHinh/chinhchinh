import { OmitType } from '@nestjs/swagger';
import { Category } from '../entities/categogy.entity';

export class UpdateCategogyDto extends OmitType(Category, ['idCategory']) {}
