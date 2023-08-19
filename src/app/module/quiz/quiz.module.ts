import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [CommonModule, QuizRoutingModule, ButtonModule, CardModule],
  declarations: [QuizComponent],
})
export class QuizModule {}
