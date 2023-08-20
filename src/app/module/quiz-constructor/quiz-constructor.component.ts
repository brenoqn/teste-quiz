import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-constructor',
  templateUrl: './quiz-constructor.component.html',
  styleUrls: ['./quiz-constructor.component.scss'],
})
export class QuizConstructorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuiz() {
    this.router.navigate(['/quiz']);
  }

  goToQuestions() {
    this.router.navigate(['/questions']);
  }
}
