import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [CommonModule, QuizRoutingModule],
  declarations: [QuizComponent],
})
export class QuizModule {}
