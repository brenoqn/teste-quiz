import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent implements OnInit {
  score: number = 0;
  totalQuestions: number = 0;
  message: string = '';
  result: string = '';
  congratulationsSound: HTMLAudioElement = new Audio('../../../assets/audio/congratulations.mp3');

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.score = +params['score'];
      this.totalQuestions = +params['totalQuestions'];
    });
  }

  ngOnInit(): void {
    this.congratulationsSound.play();
    this.route.queryParamMap.subscribe((params) => {
      this.result = `You got ${this.score} out of ${this.totalQuestions} questions right.`;
      const percentageCorrect = (this.score / this.totalQuestions) * 100;
      if (percentageCorrect === 0) {
        this.message = 'Too bad! You did not get any right. Try again.';
      } else if (percentageCorrect <= 20) {
        this.message = 'You got a few right! Keep trying, you are getting better.';
      } else if (percentageCorrect <= 50) {
        this.message = 'Great job! You got half the questions right!';
      } else if (percentageCorrect <= 70) {
        this.message = 'Amazing! You got over half right! Almost there!';
      } else if (percentageCorrect === 100) {
        this.message = 'Perfect! You got all the questions right!';
      } else {
        this.message = 'You are doing well! Keep it up!';
      }
    });
  }

  tryAgain(): void {
    this.router.navigate(['/constructor']);
  }
}
