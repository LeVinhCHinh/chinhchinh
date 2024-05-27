import { OmitType } from '@nestjs/swagger';
import { Category } from '../entities/categogy.entity';

export class CreateCategogyDto extends OmitType(Category, ['idCategory']) {}
