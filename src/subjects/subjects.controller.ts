import { Body, Controller, Post } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateSubjectDto } from './dto/create-subject.dto';

@Controller('subjects')
@ApiTags('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post('create')
  create(@Body() input: CreateSubjectDto) {
    return this.subjectsService.create(input);
  }
}
