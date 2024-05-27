import { Test, TestingModule } from '@nestjs/testing';
import { StudentToCoursesService } from './student-to-courses.service';

describe('StudentToCoursesService', () => {
  let service: StudentToCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentToCoursesService],
    }).compile();

    service = module.get<StudentToCoursesService>(StudentToCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
