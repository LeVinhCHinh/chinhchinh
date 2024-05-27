import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { StudentToCoursesController } from './student-to-courses.controller';
import { StudentToCoursesService } from './student-to-courses.service';
import { Course } from 'src/courses/entities/course.entity';
import { StudentToCourse } from './entities/student-to-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Course, StudentToCourse])],

  controllers: [StudentToCoursesController],
  providers: [StudentToCoursesService],
  exports: [TypeOrmModule],
})
export class StudentToCoursesModule {}
