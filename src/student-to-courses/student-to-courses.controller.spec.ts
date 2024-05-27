import { Test, TestingModule } from '@nestjs/testing';
import { StudentToCoursesController } from './student-to-courses.controller';
import { StudentToCoursesService } from './student-to-courses.service';

describe('StudentToCoursesController', () => {
  let controller: StudentToCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentToCoursesController],
      providers: [StudentToCoursesService],
    }).compile();

    controller = module.get<StudentToCoursesController>(
      StudentToCoursesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
