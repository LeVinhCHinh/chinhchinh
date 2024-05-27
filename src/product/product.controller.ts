import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('/detail:id')
  findOne(@Param('idProduct', ParseIntPipe) idProduct: number) {
    return this.productService.findOne(idProduct);
  }

  @ApiOperation({ summary: 'Lấy danh sách' })
  @Get('/list')
  findAll(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ): Promise<Product[]> {
    return this.productService.findAll(page, pageSize);
  }
  @ApiOperation({ summary: 'Edit' })
  @Patch('/update:id')
  update(
    @Param('idProduct') idProduct: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(idProduct, updateProductDto);
  }
  @Delete('/delete:id')
  remove(@Param('idProduct') idProduct: number) {
    return this.productService.remove(idProduct);
  }
}
