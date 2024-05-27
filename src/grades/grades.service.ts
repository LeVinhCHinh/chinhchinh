import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';
@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createGradeDto: CreateGradeDto) {
    const { gradesName, studentID, subject } = createGradeDto;
    return await this.gradeRepository.save({
      gradesName,
      subject,
      studentID,
    });
  }

  async findAll() {
    const grades = await this.gradeRepository.find({ relations: ['student'] });
    return grades.map((grade) => ({
      gradeID: grade.gradesID,
      subject: grade.subject,
      student: grade.student,
    }));
  }

  async findOne(gradesID: number) {
    const grade = await this.gradeRepository.findOne({
      where: { gradesID },

      relations: ['student'],
    });
    if (!grade) {
      throw new Error('Grade not found');
    }
    return {
      gradeID: grade.gradesID,
      subject: grade.subject,
      student: grade.student,
    };
  }

  async update(gradesID: number, updateGradeDto: UpdateGradeDto) {
    const grade = await this.gradeRepository.findOne({ where: { gradesID } });
    const { studentID } = updateGradeDto;
    if (!grade) {
      throw new Error('Grade not found');
    }
    if (updateGradeDto.studentID) {
      const student = await this.studentRepository.findOne({
        where: { studentID },
      });
      if (!student) {
        throw new Error('Student not found');
      }
      grade.student = student;
    }

    grade.subject = updateGradeDto.subject ?? grade.subject;

    const updatedGrade = await this.gradeRepository.save(grade);

    return {
      gradeID: updatedGrade.gradesID,
      subject: updatedGrade.subject,
      student: updatedGrade.student,
    };
  }

  async remove(gradesID: number) {
    const grade = await this.gradeRepository.findOne({ where: { gradesID } });
    if (!grade) {
      throw new Error('Grade not found');
    }

    await this.gradeRepository.remove(grade);
  }
}
