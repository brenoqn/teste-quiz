import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestionsComponent } from './quiz-questions.component';

fdescribe('QuizQuestionsComponent', () => {
  let component: QuizQuestionsComponent;
  let fixture: ComponentFixture<QuizQuestionsComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockQuizService: jasmine.SpyObj<QuizService>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockQuizService = jasmine.createSpyObj('QuizService', [], {
      questions$: of({ results: [] })
    });

    await TestBed.configureTestingModule({
      declarations: [QuizQuestionsComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: QuizService, useValue: mockQuizService },
      ],
    }).compileComponents();

    spyOn(QuizQuestionsComponent.prototype, 'nextQuestion');

    fixture = TestBed.createComponent(QuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize questions and call nextQuestion', () => {
    expect(QuizQuestionsComponent.prototype.nextQuestion).toHaveBeenCalled();
  });
});

