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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.score = +params['score'];
      this.totalQuestions = +params['totalQuestions'];
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      console.log('this.totalQuestions',this.totalQuestions)
      this.result = `Você acertou ${this.score} de ${this.totalQuestions} questões.`;
      const percentageCorrect = (this.score / this.totalQuestions) * 100;
      if (percentageCorrect === 0) {
        this.message = 'Que pena! Você não acertou nenhuma. Tente novamente.';
      } else if (percentageCorrect <= 20) {
        this.message =
          'Você acertou poucas! Continue tentando, você está melhorando.';
      } else if (percentageCorrect <= 50) {
        this.message = 'Ótimo trabalho! Você acertou metade das perguntas!';
      } else if (percentageCorrect <= 70) {
        this.message = 'Incrível! Você acertou mais da metade! Quase lá!';
      } else if (percentageCorrect === 100) {
        this.message = 'Perfeito! Você acertou todas as perguntas!';
      } else {
        this.message = 'Você está indo bem! Continue assim!';
      }
    });
  }

  tryAgain(): void {
    this.router.navigate(['/constructor']);
  }
}
