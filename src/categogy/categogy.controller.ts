import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CategogyService } from './categogy.service';
import { CreateCategogyDto } from './dto/create-categogy.dto';
import { UpdateCategogyDto } from './dto/update-categogy.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/categogy.entity';

@ApiTags('Categogy')
@Controller('categogy')
export class CategogyController {
  constructor(private readonly categogyService: CategogyService) {}

  @Post('/create')
  create(@Body() createCategogyDto: CreateCategogyDto) {
    return this.categogyService.create(createCategogyDto);
  }
  @ApiOperation({ summary: 'Lấy danh sách' })
  @Get('/list')
  findAll(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ): Promise<Category[]> {
    return this.categogyService.findAll(page, pageSize);
  }

  @Get('/detail:id')
  findOne(@Param('idCategory', ParseIntPipe) idCategory: number) {
    return this.categogyService.findOne(idCategory);
  }

  @Patch('/update:id')
  update(
    @Param('idCategory') idCategory: number,
    @Body() updateCategogyDto: UpdateCategogyDto,
  ) {
    return this.categogyService.update(idCategory, updateCategogyDto);
  }

  @Delete('/delate:id')
  remove(@Param('idCategory') idCategory: number) {
    return this.categogyService.remove(idCategory);
  }
}
