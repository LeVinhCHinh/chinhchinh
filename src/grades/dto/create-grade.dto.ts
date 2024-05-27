import { ApiProperty } from '@nestjs/swagger';

export class CreateGradeDto {
  @ApiProperty({ example: '' })
  subject: string;

  @ApiProperty({ example: '' })
  gradesName: string;

  @ApiProperty({ example: 1 })
  studentID: number;
}
