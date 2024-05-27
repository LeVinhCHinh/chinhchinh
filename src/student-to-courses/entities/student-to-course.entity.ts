import { Course } from 'src/courses/entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('studentToCourse')
export class StudentToCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'student_id', nullable: false })
  studentID: number;

  @Column({ name: 'course_id', nullable: false })
  courseID: number;

  @ManyToOne(() => Student, (student) => student.studentToCourse)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'studentID' })
  student: Student;

  @ManyToOne(() => Course, (course) => course.studentToCourse)
  @JoinColumn({ name: 'course_id', referencedColumnName: 'courseID' })
  course: Course;
}
