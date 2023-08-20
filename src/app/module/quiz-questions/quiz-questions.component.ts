import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval, take } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss'],
})
export class QuizQuestionsComponent implements OnInit {
  private timer$!: Subscription;
  currentQuestion: any;
  score: number = 0;
  timeLeft: number = 60;
  totalQuestions: number = 0;
  questions: any[] = [];
  answers: string[] = [];
  selectedAnswer: string | null = null;
  isCorrectAnswer: boolean | null = null;
  isTimeOver: boolean = false;
  hitSound = new Audio('../../../assets/audio/Tympani Bing.mp3');
  errorSound = new Audio(
    '../../../assets/audio/Concussive Hit Guitar Boing.mp3'
  );

  constructor(private router: Router, private quizService: QuizService) {
    this.quizService.questions$.subscribe((questions) => {
      if (questions) {
        this.questions = questions.results;
        this.totalQuestions = this.questions.length;
        this.nextQuestion();
      }
    });
  }

  ngOnInit() {}

  startTimer() {
    if (this.timer$) this.timer$.unsubscribe();
    this.timeLeft = 60;
    this.timer$ = interval(1000)
      .pipe(take(this.timeLeft))
      .subscribe(() => {
        this.timeLeft--;
        if (this.timeLeft === 0) {
          this.isTimeOver = true;
          this.stopTimer();
        }
      });
  }

  shuffleAnswers(correct: string, incorrect: string[]): string[] {
    const answers = [correct, ...incorrect];
    return answers.sort(() => Math.random() - 0.5);
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
    this.isCorrectAnswer = null;
  }

  stopTimer() {
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
  }

  confirmAnswer() {
    this.stopTimer();
    if (this.selectedAnswer === this.currentQuestion.correct_answer) {
      this.isCorrectAnswer = true;
      this.hitSound.play();
      this.score++;
    } else {
      this.isCorrectAnswer = false;
      this.errorSound.play();
    }
  }

  nextQuestion() {
    if (this.questions.length === 0) {
      this.router.navigate(['/result'], {
        queryParams: { score: this.score, totalQuestions: this.totalQuestions },
      });
      return;
    }
    this.currentQuestion = this.questions.shift();
    this.answers = this.shuffleAnswers(
      this.currentQuestion.correct_answer,
      this.currentQuestion.incorrect_answers
    );
    this.selectedAnswer = null;
    this.isCorrectAnswer = null;
    this.startTimer();
  }

  goToConstructor() {
    this.router.navigate(['/constructor']);
  }
}
