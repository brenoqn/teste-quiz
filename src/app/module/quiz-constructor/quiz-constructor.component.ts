import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-quiz-constructor',
  templateUrl: './quiz-constructor.component.html',
  styleUrls: ['./quiz-constructor.component.scss'],
})
export class QuizConstructorComponent implements OnInit {
  quizForm!: FormGroup;

  constructor(
    private router: Router,
    private httpClientService: HttpClientService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.quizForm = this.fb.group({
      numberOfQuestions: [10],
      category: [9],
      difficulty: ['any'],
      type: ['any'],
    });
  }

  goToQuiz() {
    this.router.navigate(['/quiz']);
  }

  goToQuestions() {
    let { numberOfQuestions, category, difficulty, type } = this.quizForm.value;
    difficulty = difficulty === 'any' ? null : difficulty;
    type = type === 'any' ? null : type;

    this.httpClientService
      .getQuestions(
        Number(numberOfQuestions),
        Number(category),
        difficulty,
        type
      )
      .subscribe({
        next: (res) => {
          console.log('next', res);
          // this.router.navigate(['/questions']);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
