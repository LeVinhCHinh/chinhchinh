import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findOne(idProduct: number) {
    return this.productRepository.findOne({ where: { idProduct } });
  }

  async findAll(page: number = 1, pageSize: number = 10): Promise<Product[]> {
    const skip = (page - 1) * pageSize;

    return await this.productRepository.find({
      take: pageSize,
      skip: skip,
    });
  }

  async update(idProduct: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(idProduct, updateProductDto);
    return this.productRepository.findOne({ where: { idProduct } });
  }

  async remove(idProduct: number) {
    await this.productRepository.delete(idProduct);
  }
}
