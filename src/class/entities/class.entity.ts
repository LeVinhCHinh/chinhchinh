import { Subjects } from 'src/subjects/entities/subject.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('classEn')
export class ClassEn {
  @PrimaryGeneratedColumn()
  classID: number;
  @Column()
  className: string;
  @OneToMany(() => Subjects, (subjects) => subjects.classEn)
  subjects: Subjects[];
}
