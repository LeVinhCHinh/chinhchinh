import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { ClassEn } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subjects } from 'src/subjects/entities/subject.entity';
import { SubjectsService } from 'src/subjects/subjects.service';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassEn)
    private readonly classRepository: Repository<ClassEn>,
    @InjectRepository(Subjects)
    private readonly subjectRepository: Repository<Subjects>,

    private subjectServices: SubjectsService,
  ) {}
  async create(createClassDto: CreateClassDto) {
    const { className, subjectName } = createClassDto;
    const checkExistClass = await this.classRepository.findOneBy({
      className,
    });
    if (checkExistClass) {
      const { classID } = checkExistClass;
      const subjectExist =
        await this.subjectServices.checkExistSubject(subjectName);
      if (subjectExist) {
        throw new HttpException('Môn học đã tồn tại', HttpStatus.BAD_REQUEST);
      }
      await this.subjectRepository.save({
        classID,
        subjectname: subjectName,
      });
      return await this.classRepository.find({
        select: {
          classID: true,
          className: true,
          subjects: {
            subjectID: true,
            subjectname: true,
          },
        },
        where: { classID },
        relations: { subjects: true },
      });
    }
    const isClass = await this.classRepository.save({
      className,
    });
    const { classID } = isClass;

    await this.subjectRepository.save({
      classID,
      subjectname: subjectName,
    });
    return await this.classRepository.find({
      select: {
        classID: true,
        className: true,
        subjects: {
          subjectID: true,
          subjectname: true,
        },
      },
      where: { classID },
      relations: { subjects: true },
    });
  }

  findAll() {
    return this.classRepository.find({
      select: {
        className: true,
        subjects: {
          subjectname: true,
          subjectID: true,
        },
      },
      relations: {
        subjects: true,
      },
    });
  }

  findOne(classID: number) {
    return this.classRepository.findOne({ where: { classID } });
  }

  // update(id: number, updateClassDto: UpdateClassDto) {
  //   return `This action updates a #${id} class`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} class`;
  // }
}
