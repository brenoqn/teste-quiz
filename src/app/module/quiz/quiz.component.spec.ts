import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment currentCard when nextCard is called', () => {
    component.currentCard = 0;
    component.nextCard();
    expect(component.currentCard).toEqual(1);
  });

  it('should decrement currentCard when prevCard is called', () => {
    component.currentCard = 1;
    component.prevCard();
    expect(component.currentCard).toEqual(0);
  });

  it('should not increment currentCard beyond the last item', () => {
    component.currentCard = component.items.length - 1;
    component.nextCard();
    expect(component.currentCard).toEqual(component.items.length - 1);
  });

  it('should not decrement currentCard below 0', () => {
    component.currentCard = 0;
    component.prevCard();
    expect(component.currentCard).toEqual(0);
  });
});
