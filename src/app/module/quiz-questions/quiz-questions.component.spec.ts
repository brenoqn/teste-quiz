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

  it('should start timer', () => {
    component.startTimer();
    expect(component.timeLeft).toBe(60);
    component.stopTimer();
  });

  it('should toggle pause', () => {
    component.startTimer();
    component.togglePause();
    expect(component.isPaused).toBe(true);
    component.togglePause();
    expect(component.isPaused).toBe(false);
    component.stopTimer();
  });

  it('should select answer', () => {
    component.selectAnswer('answer');
    expect(component.selectedAnswer).toBe('answer');
  });

  it('should confirm correct answer, play correct sound, and increment score', () => {
    const playSpy = spyOn(component.correctSound, 'play');
    component.currentQuestion = { correct_answer: 'correct-answer' };
    component.selectAnswer('correct-answer');
    component.confirmAnswer();
    expect(component.isCorrectAnswer).toBe(true);
    expect(playSpy).toHaveBeenCalled();
    expect(component.score).toBe(1);
  });

  it('should confirm incorrect answer and play error sound', () => {
    const playSpy = spyOn(component.errorSound, 'play');
    component.currentQuestion = { correct_answer: 'correct-answer' };
    component.selectAnswer('wrong-answer');
    component.confirmAnswer();
    expect(component.isCorrectAnswer).toBe(false);
    expect(playSpy).toHaveBeenCalled();
    expect(component.score).toBe(0);
  });

  it('should shuffle answers including the correct one', () => {
    const correct = 'correct-answer';
    const incorrect = ['wrong1', 'wrong2', 'wrong3'];
    const shuffledAnswers = component.shuffleAnswers(correct, incorrect);
    expect(shuffledAnswers.length).toBe(incorrect.length + 1);
    expect(shuffledAnswers.includes(correct)).toBe(true);
    incorrect.forEach((answer) => {
      expect(shuffledAnswers.includes(answer)).toBe(true);
    });
  });

  it('should go to the next question', () => {
    component.questions = [{ correct_answer: 'correct1', incorrect_answers: ['wrong1', 'wrong2'] }, { correct_answer: 'correct2', incorrect_answers: ['wrong3', 'wrong4'] }];
    component.nextQuestion();
    expect(component.questions.length).toBe(2);
  });

  it('should redirect to results page if no more questions', () => {
    component.questions = [];
    component.nextQuestion();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/constructor']);
  });

  it('should load the next question if available', () => {
    const question = undefined;
    component.questions = [question];
    spyOn(component, 'startTimer');
    component.nextQuestion();
    expect(component.currentQuestion).toEqual(question);
    expect(component.selectedAnswer).toBeNull();
    expect(component.isCorrectAnswer).toBeNull();
    expect(component.timeLeft).toBe(60);
  });


  it('should navigate to /constructor and stop all sounds', () => {
    spyOn(component, 'stopAllSounds');
    component.goToConstructor();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/constructor']);
    expect(component.stopAllSounds).toHaveBeenCalled();
  });
});
