import { StudentToCourse } from 'src/student-to-courses/entities/student-to-course.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('course')
export class Course {
  @PrimaryGeneratedColumn()
  courseID: number;
  @Column()
  courseName: string;
  @Column()
  credits: string;
  // @Column({ nullable: false })
  // studentID: number;
  @OneToMany(() => StudentToCourse, (studentToCourse) => studentToCourse.course)
  studentToCourse: StudentToCourse[];
  length: number;
}
