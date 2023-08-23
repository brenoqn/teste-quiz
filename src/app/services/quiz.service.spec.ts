import { TestBed } from '@angular/core/testing';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizService],
    });
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially have null questions', (done) => {
    service.questions$.subscribe((questions) => {
      expect(questions).toBeNull();
      done();
    });
  });

  it('should set and get questions', (done) => {
    const testQuestions = [{ question: 'What is 2 + 2?' }];

    service.setQuestions(testQuestions);
    service.questions$.subscribe((questions) => {
      expect(questions).toEqual(testQuestions);
      done();
    });
  });
});
