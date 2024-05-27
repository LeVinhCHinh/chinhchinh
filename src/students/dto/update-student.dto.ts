import { OmitType } from '@nestjs/swagger';
import { Student } from '../entities/student.entity';

export class UpdateStudentDto extends OmitType(Student, ['studentID']) {}
