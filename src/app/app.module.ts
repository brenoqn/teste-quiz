import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizQuestionsModule } from './module/quiz-questions/quiz-questions.module';
import { QuizModule } from './module/quiz/quiz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    QuizModule,
    QuizQuestionsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
