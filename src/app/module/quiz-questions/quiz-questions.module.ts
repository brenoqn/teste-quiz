import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizQuestionsRoutingModule } from './quiz-questions-routing.module';
import { QuizQuestionsComponent } from './quiz-questions.component';

@NgModule({
  imports: [CommonModule, QuizQuestionsRoutingModule],
  declarations: [QuizQuestionsComponent],
})
export class QuizQuestionsModule {}
