import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestionsComponent } from './quiz-questions.component';

describe('QuizQuestionsComponent', () => {
  let component: QuizQuestionsComponent;
  let fixture: ComponentFixture<QuizQuestionsComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockQuizService: any;
  let questionsSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    questionsSubject = new BehaviorSubject({ results: [] });
    mockQuizService = {
      questions$: questionsSubject,
    };

    await TestBed.configureTestingModule({
      declarations: [QuizQuestionsComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: QuizService, useValue: mockQuizService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizQuestionsComponent);
    component = fixture.componentInstance;
    spyOn(component, 'nextQuestion');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize questions and call nextQuestion', () => {
    questionsSubject.next({ results: ['question'] });
    fixture.detectChanges();
    expect(component.nextQuestion).toHaveBeenCalled();
  });
});
