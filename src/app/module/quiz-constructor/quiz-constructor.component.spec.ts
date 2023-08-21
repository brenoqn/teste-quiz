import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';
import { QuizService } from '../../services/quiz.service';
import { QuizConstructorComponent } from './quiz-constructor.component';

describe('QuizConstructorComponent', () => {
  let component: QuizConstructorComponent;
  let fixture: ComponentFixture<QuizConstructorComponent>;
  let router: Router;
  let httpClientService: HttpClientService;
  let quizService: QuizService;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    httpClientService = jasmine.createSpyObj('HttpClientService', [
      'getQuestions',
    ]);
    quizService = jasmine.createSpyObj('QuizService', ['setQuestions']);

    await TestBed.configureTestingModule({
      declarations: [QuizConstructorComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: Router, useValue: router },
        { provide: HttpClientService, useValue: httpClientService },
        { provide: QuizService, useValue: quizService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize quizForm', () => {
    expect(component.quizForm).toBeTruthy();
    expect(component.quizForm.get('numberOfQuestions')?.value).toBe(10);
    expect(component.quizForm.get('category')?.value).toBe(9);
    expect(component.quizForm.get('difficulty')?.value).toBe('any');
    expect(component.quizForm.get('type')?.value).toBe('any');
  });

  it('should navigate to /quiz when goToQuiz is called', () => {
    component.goToQuiz();
    expect(router.navigate).toHaveBeenCalledWith(['/quiz']);
  });
});
