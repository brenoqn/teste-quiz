import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'quiz',
    loadChildren: () =>
      import('./module/quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./module/quiz-questions/quiz-questions.module').then(
        (m) => m.QuizQuestionsModule
      ),
  },
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
