import {
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
  ValidateIf,
} from 'class-validator';
import { Grade } from 'src/grades/entities/grade.entity';
import { StudentToCourse } from 'src/student-to-courses/entities/student-to-course.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('student')
export class Student {
  @PrimaryGeneratedColumn()
  studentID: number;
  @Column()
  @IsNotEmpty({ message: 'First Name không được để trống' })
  firstName: string;
  @Column()
  @IsNotEmpty({ message: 'Last Name không được để trống' })
  lastName: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  @ValidateIf((o) => o.email !== undefined && o.email !== '')
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  email: string;
  @Column()
  @ValidateIf((o) => o.phoneNumber !== undefined && o.phoneNumber !== '')
  // @IsNotEmpty({ message: 'Số điện thoại không được để trống' })
  @Length(1, 10, { message: 'Số điện thoại Không quá 10 kí tự' })
  @Matches(/^[0-9]+$/, { message: 'Số điện thoại chỉ được chứa số' })
  phoneNumber: string;

  @OneToMany(
    () => StudentToCourse,
    (studentToCourse) => studentToCourse.student,
  )
  studentToCourse: StudentToCourse[];
  length: number;

  @OneToMany(() => Grade, (grades) => grades.student)
  grades: Grade[];
}
