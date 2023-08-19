import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  currentCard: number = 0;
  items = [
    {
      title: 'Início',
      description: 'Clique no botão da página inicial para começar.',
    },
    {
      title: 'Perguntas',
      description: 'Há questões de Múltipla Escolha e Verdadeiro ou Falso.',
    },
    {
      title: 'Temporizador',
      description: 'Responda em até 1 minuto. Existem chances de ganhar tempo extra.',
    },
    {
      title: 'Feedback',
      description: 'Receba animações e sons para respostas corretas e incorretas.',
    },
    {
      title: 'Níveis',
      description: 'As perguntas variam em dificuldade e categorias.',
    },
    {
      title: 'Pontuação',
      description: 'Veja sua pontuação ao final e jogue novamente se desejar.',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  nextCard() {
    if (this.currentCard < this.items.length - 1) {
      this.currentCard++;
    }
  }

  prevCard() {
    if (this.currentCard > 0) {
      this.currentCard--;
    }
  }

  startQuiz() {
    this.router.navigate(['/questions']);
  }
}
