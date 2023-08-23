import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
  let service: HttpClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientService],
    });

    service = TestBed.inject(HttpClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get questions', () => {
    const numberOfQuestions = 10;
    const category = 1;
    const difficulty = 'medium';
    const type = 'multiple';

    service
      .getQuestions(numberOfQuestions, category, difficulty, type)
      .subscribe((response) => {
        expect(response).toEqual({ results: 'data' });
      });

    const req = httpMock.expectOne(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`
    );
    expect(req.request.method).toBe('GET');

    req.flush({ results: 'data' });
  });

  it('should get questions without optional parameters', () => {
    const numberOfQuestions = 10;

    service.getQuestions(numberOfQuestions).subscribe((response) => {
      expect(response).toEqual({ results: 'data' });
    });

    const req = httpMock.expectOne(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}`
    );
    expect(req.request.method).toBe('GET');

    req.flush({ results: 'data' });
  });
});
