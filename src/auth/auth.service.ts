import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private jwtService: JwtService,
  ) {}
  async signIn(input: SignInDto): Promise<{ access_token: string }> {
    const { username, password: pass } = input;
    const student = await this.studentRepository.findOne({
      where: { email: username },
    });
    if (student?.password !== pass) {
      throw new UnauthorizedException('Tài khoản hoặc mật khẩu không đúng');
    }
    const payload = { sub: student.studentID, username: student.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
    // const { password, ...result } = user;
    // return result;
  }
}
