import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizConstructorRoutingModule } from './quiz-constructor-routing.module';
import { QuizConstructorComponent } from './quiz-constructor.component';

@NgModule({
  imports: [CommonModule, QuizConstructorRoutingModule],
  declarations: [QuizConstructorComponent],
})
export class QuizConstructorModule {}
