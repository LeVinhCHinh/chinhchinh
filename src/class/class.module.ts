import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { ClassEn } from './entities/class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subjects } from 'src/subjects/entities/subject.entity';
import { SubjectsModule } from 'src/subjects/subjects.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClassEn, Subjects]), SubjectsModule],

  controllers: [ClassController],
  providers: [ClassService],
  // exports: [TypeOrmModule],
})
export class ClassModule {}
