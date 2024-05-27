import { ClassEn } from 'src/class/entities/class.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('subjects')
export class Subjects {
  @PrimaryGeneratedColumn()
  subjectID: number;
  @Column()
  subjectname: string;
  @Column({ name: 'class_id', nullable: true })
  classID: number;
  @ManyToOne(() => ClassEn, (classEn) => classEn.subjects)
  @JoinColumn({ name: 'class_id', referencedColumnName: 'classID' })
  classEn: ClassEn;
}
