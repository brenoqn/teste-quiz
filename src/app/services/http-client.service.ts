import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private baseUrl = 'https://opentdb.com/api.php?';

  constructor(private http: HttpClient) {}

  getQuestions(
    numberOfQuestions: number,
    category?: number,
    difficulty?: string | null,
    type?: string | null
  ) {
    let url = `${this.baseUrl}amount=${numberOfQuestions}`;

    if (category) {
      url += `&category=${category}`;
    }

    if (difficulty) {
      url += `&difficulty=${difficulty}`;
    }

    if (type) {
      url += `&type=${type}`;
    }

    return this.http.get(url);
  }
}
