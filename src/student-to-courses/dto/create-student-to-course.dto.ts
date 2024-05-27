import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class AddStudentToCourseDto {
  @ApiProperty({ example: [], required: true })
  @IsArray()
  studentID: number[];

  @ApiProperty({ example: [], required: true })
  @IsArray()
  courseID: number[];
}
