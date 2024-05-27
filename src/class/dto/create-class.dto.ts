import { ApiProperty, OmitType } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty({ example: '' })
  className: string;

  @ApiProperty({ example: '' })
  subjectName: string;
}

export class CreateClassWithoutSubjectDto extends OmitType(CreateClassDto, [
  'subjectName',
]) {}
