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
      title: 'Questions',
      description: 'There are Multiple Choice and True or False questions.',
    },
    {
      title: 'Timer',
      description: 'Answer within 1 minute.',
    },
    {
      title: 'Feedback',
      description:
        'Receive animations and sounds for correct and incorrect answers.',
    },
    {
      title: 'Levels',
      description: 'Questions vary in difficulty and categories.',
    },
    {
      title: 'Scoring',
      description: 'See your score at the end and play again if you wish.',
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

  constructorQuiz() {
    this.router.navigate(['/constructor']);
  }
}
