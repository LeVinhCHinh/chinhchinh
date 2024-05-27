import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ example: 'test@gmail.com' })
  username: string;
  @ApiProperty({ example: '123456' })
  password: string;
}
