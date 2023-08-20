import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizResultRoutingModule } from './quiz-result-routing.module';
import { QuizResultComponent } from './quiz-result.component';

@NgModule({
  imports: [CommonModule, QuizResultRoutingModule],
  declarations: [QuizResultComponent],
})
export class QuizResultModule {}
