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
  isPaused: boolean = false;
  correctSound = new Audio('../../../assets/audio/correct.mp3');
  errorSound = new Audio('../../../assets/audio/error.mp3');
  timeSound = new Audio('../../../assets/audio/tic-tac.mp3');

  constructor(private router: Router, private quizService: QuizService) {
    this.quizService.questions$.subscribe((questions) => {
      if (!questions || questions.results.length === 0) {
        this.router.navigate(['/constructor']);
        return;
      }
      this.questions = questions.results;
      this.totalQuestions = this.questions.length;
      this.nextQuestion();
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.stopAllSounds();
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
  }

  startTimer() {
    if (this.timer$) this.timer$.unsubscribe();
    this.timer$ = interval(1000)
      .pipe(take(this.timeLeft))
      .subscribe(() => {
        if (!this.isPaused) {
          this.timeLeft--;
          if (this.timeLeft === 10 && !this.isPaused) {
            this.timeSound.play();
          }
          if (this.timeLeft === 0) {
            this.isTimeOver = true;
            this.stopTimer();
            this.errorSound.play();
          }
        }
      });
  }

  stopTimer() {
    if (this.timer$) {
      this.timer$.unsubscribe();
      this.timeSound.pause();
      this.timeSound.currentTime = 0;
    }
  }

  togglePause() {
    if (this.isPaused) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
    this.isPaused = !this.isPaused;
  }

  stopAllSounds() {
    this.correctSound.pause();
    this.correctSound.currentTime = 0;
    this.errorSound.pause();
    this.errorSound.currentTime = 0;
    this.timeSound.pause();
    this.timeSound.currentTime = 0;
  }

  shuffleAnswers(correct: string, incorrect: string[]): string[] {
    const answers = [correct, ...incorrect];
    return answers.sort(() => Math.random() - 0.5);
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
    this.isCorrectAnswer = null;
  }

  confirmAnswer() {
    this.stopTimer();
    if (this.selectedAnswer === this.currentQuestion.correct_answer) {
      this.isCorrectAnswer = true;
      this.correctSound.play();
      this.score++;
    } else {
      this.isCorrectAnswer = false;
      this.errorSound.play();
    }
  }

  nextQuestion() {
    if (this.questions.length === 0) {
      this.stopAllSounds();
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
    this.timeLeft = 60;
    this.startTimer();
  }

  goToConstructor() {
    this.router.navigate(['/constructor']);
    this.stopAllSounds();
  }
}
