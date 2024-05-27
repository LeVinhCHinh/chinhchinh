import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { Subjects } from './entities/subject.entity';
import { ClassEn } from 'src/class/entities/class.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subjects)
    private readonly subjectjsRepository: Repository<Subjects>,

    @InjectRepository(ClassEn)
    private readonly classEnRepository: Repository<ClassEn>,
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    const { classID } = createSubjectDto;
    const checkExistClass = await this.classEnRepository.findOneBy({
      classID,
    });
    if (!checkExistClass) {
      throw new HttpException('Không tồn tại lớp học!', HttpStatus.BAD_REQUEST);
    }
    return await this.subjectjsRepository.save(createSubjectDto);
  }
  async checkExistSubject(subjectName: string) {
    const subject = await this.subjectjsRepository.findOne({
      where: {
        subjectname: subjectName,
      },
    });
    return subject;
  }
}
