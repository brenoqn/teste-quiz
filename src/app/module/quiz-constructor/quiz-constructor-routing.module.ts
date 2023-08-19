import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizConstructorComponent } from './quiz-constructor.component';

const routes: Routes = [{ path: '', component: QuizConstructorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizConstructorRoutingModule {}
