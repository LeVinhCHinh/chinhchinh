import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateStudentDto } from './dto/create-student.dto';
import { PaginationDto } from './dto/pagination.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './students.service';
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('/create')
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }
  @Get('/list')
  //   @Query('page') page: number,
  //   @Query('pageSize') pageSize: number,
  // ): Promise<Student[]> {
  //   return this.studentsService.findAll(page, pageSize);
  // }
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.studentsService.findAll(paginationDto);
  }
  @Get('/detail:id')
  findOne(@Param('id') studentID: number) {
    return this.studentsService.findOne(studentID);
  }
  @Patch('/update:id')
  update(
    @Param('id') studentID: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(studentID, updateStudentDto);
  }
  @Delete(':id')
  remove(@Param('id') studentID: number) {
    return this.studentsService.remove(studentID);
  }
}
