import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Post('/create')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get('/list')
  findAll() {
    return this.coursesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.coursesService.findOne(+id);
  // }

  @Patch('/update:id')
  update(
    @Param('couresID') couresID: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(couresID, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('couresID') couresID: number) {
    return this.coursesService.remove(couresID);
  }
}
