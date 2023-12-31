import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizQuestionsComponent } from './quiz-questions.component';

const routes: Routes = [{ path: '', component: QuizQuestionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizQuestionsRoutingModule {}
