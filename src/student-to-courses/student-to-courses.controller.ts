import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddStudentToCourseDto } from './dto/create-student-to-course.dto';
import { StudentToCoursesService } from './student-to-courses.service';

@Controller('student-to-courses')
@ApiTags('student-to-courses')
export class StudentToCoursesController {
  constructor(
    private readonly studentToCoursesService: StudentToCoursesService,
  ) {}
  @Post('add')
  async addStudentToCourse(@Body() input: AddStudentToCourseDto) {
    try {
      const result =
        await this.studentToCoursesService.addStudentToCourse(input);
      return result;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  // @Post()
  // create(@Body() createStudentToCourseDto: CreateStudentToCourseDto) {
  //   return this.studentToCoursesService.create(createStudentToCourseDto);
  // }

  // @Get()
  // findAll() {
  //   return this.studentToCoursesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.studentToCoursesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateStudentToCourseDto: UpdateStudentToCourseDto,
  // ) {
  //   return this.studentToCoursesService.update(+id, updateStudentToCourseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.studentToCoursesService.remove(+id);
  // }
}
