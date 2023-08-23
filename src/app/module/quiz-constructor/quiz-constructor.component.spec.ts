import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientService } from '../../services/http-client.service';
import { QuizService } from '../../services/quiz.service';
import { QuizConstructorComponent } from './quiz-constructor.component';

describe('QuizConstructorComponent', () => {
  let component: QuizConstructorComponent;
  let fixture: ComponentFixture<QuizConstructorComponent>;
  let router: Router;
  let quizService: QuizService;
  let httpClientService: HttpClientService;
  const mockQuestions = [
    {
      category: 'General Knowledge',
      correct_answer: 'Tango',
      difficulty: 'easy',
      incorrect_answers: ['Target', 'Taxi', 'Turkey'],
      question:
        'What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?',
      type: 'multiple',
    },
  ];

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    quizService = jasmine.createSpyObj('QuizService', ['setQuestions']);
    httpClientService = {
      getQuestions: jasmine
        .createSpy('getQuestions')
        .and.returnValue(of(mockQuestions)),
    } as unknown as HttpClientService;

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

  it('should form goToQuestions and navigate to /questions', () => {
    component.goToQuestions();
    expect(httpClientService.getQuestions).toHaveBeenCalledWith(
      10,
      9,
      null,
      null
    );
    expect(quizService.setQuestions).toHaveBeenCalledWith(mockQuestions);
    expect(router.navigate).toHaveBeenCalledWith(['/questions']);
  });
});
