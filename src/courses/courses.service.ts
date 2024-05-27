import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  findAll() {
    return this.courseRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} course`;
  // }

  async update(courseID: number, updateCourseDto: UpdateCourseDto) {
    await this.courseRepository.update(courseID, updateCourseDto);
    return this.courseRepository.findOne({ where: { courseID } });
  }

  async remove(courseID: number) {
    return await this.courseRepository.delete(courseID);
  }
}
