import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  // async findAll(page: number = 1, pageSize: number = 10): Promise<Student[]> {
  //   const skip = (page - 1) * pageSize;

  //   return await this.studentRepository.find({
  //     take: pageSize,
  //     skip: skip,
  //   });
  // }
  async findAll(paginationDto: PaginationDto): Promise<Student[]> {
    const { page = 1, pageSize = 10 } = paginationDto;

    return await this.studentRepository.find({
      select: {
        email: true,
        firstName: true,
        lastName: true,
        grades: true,
        phoneNumber: true,
        studentID: true,
        studentToCourse: {
          courseID: true,
        },
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      relations: {
        studentToCourse: true,
      },
    });
  }

  findOne(studentID: number) {
    return this.studentRepository.findOne({ where: { studentID } });
  }

  async update(studentID: number, updateStudentDto: UpdateStudentDto) {
    await this.studentRepository.update(studentID, updateStudentDto);
    return this.studentRepository.findOne({ where: { studentID } });
  }

  async remove(studentID: number) {
    return await this.studentRepository.delete(studentID);
  }
  // async addStudentToCourse(studentID: number, courseID: number) {
  //   const student = await this.studentRepository.findOne({
  //     where: { studentID },
  //     relations: ['courses'],
  //   });
  //   const course = await this.courseRepository.findOne({
  //     where: { courseID },
  //   });

  //   if (student && course) {
  //     student.course.push(course);
  //     return this.studentRepository.save(student);
  //   }
  //   throw new Error('Student or Course not found');
  // }
}
