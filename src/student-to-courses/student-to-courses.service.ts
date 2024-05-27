import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import { In, Repository } from 'typeorm';
import { AddStudentToCourseDto } from './dto/create-student-to-course.dto';
import { StudentToCourse } from './entities/student-to-course.entity';

@Injectable()
export class StudentToCoursesService {
  // create(createStudentToCourseDto: CreateStudentToCourseDto) {
  //   return 'This action adds a new studentToCourse';
  // }
  // findAll() {
  //   return `This action returns all studentToCourses`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} studentToCourse`;
  // }
  // update(id: number, updateStudentToCourseDto: UpdateStudentToCourseDto) {
  //   return `This action updates a #${id} studentToCourse`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} studentToCourse`;
  // }
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(StudentToCourse) // Inject repository for StudentToCourse entity
    private readonly studentToCourseRepository: Repository<StudentToCourse>, // Repository for studentToCourse
  ) {}

  async addStudentToCourse(input: AddStudentToCourseDto) {
    const { courseID, studentID } = input;

    // Kiểm tra xem studentID và courseID có tồn tại không
    const students = await this.studentRepository.find({
      where: { studentID: In(studentID) },
    });
    const courses = await this.courseRepository.find({
      where: { courseID: In(courseID) },
    });

    if (students.length === 0 || courses.length === 0) {
      throw new Error('Student or Course not found');
    }

    const studentToCourses: StudentToCourse[] = [];

    // Tạo một mảng các bản ghi StudentToCourse từ mảng students và courses
    students.forEach((student) => {
      courses.forEach((course) => {
        const studentToCourse = new StudentToCourse();
        studentToCourse.student = student;
        studentToCourse.course = course;
        studentToCourses.push(studentToCourse);
      });
    });

    if (studentToCourses.length === 0) {
      throw new Error('No studentToCourses found');
    }

    // Lưu các bản ghi mới vào bảng studentToCourse
    await this.studentToCourseRepository.save(studentToCourses);

    // Trả về danh sách các bản ghi đã được lưu
    return studentToCourses;
  }
  // async addStudentToCourse(input: AddStudentToCourseDto) {
  //   const { courseID, studentID } = input;

  //   // Kiểm tra sự tồn tại của sinh viên và khóa học
  //   const students = await this.studentRepository.find({
  //     where: { studentID: In(studentID) },
  //   });
  //   const courses = await this.courseRepository.find({
  //     where: { courseID: In(courseID) },
  //   });

  //   if (
  //     students.length !== studentID.length ||
  //     courses.length !== courseID.length
  //   ) {
  //     throw new Error('One or more students or courses not found');
  //   }

  //   // Tạo mới các bản ghi StudentToCourse
  //   const studentToCourses = [];
  //   for (const sid of studentID) {
  //     for (const cid of courseID) {
  //       studentToCourses.push({
  //         studentID: sid,
  //         courseID: cid,
  //       });
  //     }
  //   }

  //   // Lưu các bản ghi mới vào cơ sở dữ liệu
  //   return this.studentToCourseRepository.save(studentToCourses);
  // }
}
