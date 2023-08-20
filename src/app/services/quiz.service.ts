import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questionsSubject = new BehaviorSubject<any>(null);
  questions$ = this.questionsSubject.asObservable();

  setQuestions(questions: any) {
    this.questionsSubject.next(questions);
  }
}
