import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizConstructorRoutingModule } from './quiz-constructor-routing.module';
import { QuizConstructorComponent } from './quiz-constructor.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, QuizConstructorRoutingModule],
  declarations: [QuizConstructorComponent],
})
export class QuizConstructorModule {}
