import { PickType } from '@nestjs/swagger';
import { Course } from './../entities/course.entity';

export class CreateCourseDto extends PickType(Course, [
  'courseName',
  'credits',
]) {}
