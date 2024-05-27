import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('grades')
export class Grade {
  @PrimaryGeneratedColumn()
  gradesID: number;
  @Column()
  gradesName: string;
  @Column()
  subject: string;
  @Column({ name: 'student_id', nullable: true })
  studentID: number;
  @ManyToOne(() => Student, (student) => student.grades)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'studentID' })
  student: Student;
}
