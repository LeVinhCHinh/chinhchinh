import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateGradeDto } from './dto/create-grade.dto';
import { GradesService } from './grades.service';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { AuthGuard } from 'src/auth/auth.guard';
@ApiTags('Grades')
@Controller('grades')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Post('/create')
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @Get('/list')
  findAll() {
    return this.gradesService.findAll();
  }

  @Get('/detail:id')
  findOne(@Param('gradesID') gradesID: number) {
    return this.gradesService.findOne(gradesID);
  }

  @Patch('/update:id')
  update(
    @Param('gradesID') gradesID: number,
    @Body() updateGradeDto: UpdateGradeDto,
  ) {
    return this.gradesService.update(gradesID, updateGradeDto);
  }

  @Delete(':id')
  remove(@Param('gradesID') gradesID: number) {
    return this.gradesService.remove(gradesID);
  }
}
