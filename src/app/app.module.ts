import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizConstructorModule } from './module/quiz-constructor/quiz-constructor.module';
import { QuizQuestionsModule } from './module/quiz-questions/quiz-questions.module';
import { QuizResultModule } from './module/quiz-result/quiz-result.module';
import { QuizModule } from './module/quiz/quiz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    QuizModule,
    QuizConstructorModule,
    QuizQuestionsModule,
    QuizResultModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
