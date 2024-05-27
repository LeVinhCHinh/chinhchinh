import { Injectable } from '@nestjs/common';
import { CreateCategogyDto } from './dto/create-categogy.dto';
import { UpdateCategogyDto } from './dto/update-categogy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/categogy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategogyService {
  constructor(
    @InjectRepository(Category)
    private readonly categogyRepository: Repository<Category>,
  ) {}
  create(createCategogyDto: CreateCategogyDto) {
    const categogy = this.categogyRepository.create(createCategogyDto);
    return this.categogyRepository.save(categogy);
  }

  async findAll(page: number = 1, pageSize: number = 10): Promise<Category[]> {
    const skip = (page - 1) * pageSize;

    return await this.categogyRepository.find({
      take: pageSize,
      skip: skip,
    });
  }

  findOne(idCategory: number) {
    return this.categogyRepository.findOne({ where: { idCategory } });
  }

  async update(idCategory: number, updateCategogyDto: UpdateCategogyDto) {
    await this.categogyRepository.update(idCategory, updateCategogyDto);
    return this.categogyRepository.findOne({ where: { idCategory } });
  }

  async remove(idCategory: number) {
    await this.categogyRepository.delete(idCategory);
  }
}
