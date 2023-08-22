import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { QuizResultComponent } from './quiz-result.component';

describe('QuizResultComponent', () => {
  let component: QuizResultComponent;
  let fixture: ComponentFixture<QuizResultComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      queryParams: of({
        score: 5,
        totalQuestions: 10,
      }),
      queryParamMap: of({
        get: (param: string) => {
          if (param === 'score') return '5';
          if (param === 'totalQuestions') return '10';
          return null;
        },
      }),
    };

    await TestBed.configureTestingModule({
      declarations: [QuizResultComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizResultComponent);
    component = fixture.componentInstance;
    spyOn(component.congratulationsSound, 'play');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct result and message', () => {
    expect(component.result).toBe('You got 5 out of 10 questions right.');
    expect(component.message).toBe(
      'Great job! You got half the questions right!'
    );
  });

  it('should navigate to the correct route when trying again', () => {
    component.tryAgain();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/constructor']);
  });
});
