import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategogyModule } from './categogy/categogy.module';
import { Category } from './categogy/entities/categogy.entity';
import { Product } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { Student } from './students/entities/student.entity';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/entities/course.entity';
import { GradesModule } from './grades/grades.module';
import { StudentToCoursesModule } from './student-to-courses/student-to-courses.module';
import { StudentToCourse } from './student-to-courses/entities/student-to-course.entity';
import { Grade } from './grades/entities/grade.entity';
import { AuthModule } from './auth/auth.module';
import { ClassModule } from './class/class.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ClassEn } from './class/entities/class.entity';
import { Subjects } from './subjects/entities/subject.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123',
      database: 'postgres',
      entities: [
        Product,
        Category,
        Student,
        Course,
        StudentToCourse,
        Grade,
        ClassEn,
        Subjects,
      ],
      synchronize: true,
    }),
    ProductModule,
    CategogyModule,
    StudentsModule,
    CoursesModule,
    GradesModule,
    StudentToCoursesModule,
    AuthModule,
    ClassModule,
    SubjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
