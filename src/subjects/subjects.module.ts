import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subjects } from './entities/subject.entity';
import { ClassEn } from 'src/class/entities/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subjects, ClassEn])],

  controllers: [SubjectsController],
  providers: [SubjectsService],
  exports: [SubjectsService],
})
export class SubjectsModule {}
