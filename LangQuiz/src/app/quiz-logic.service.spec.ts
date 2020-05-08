import { TestBed } from '@angular/core/testing';

import { QuizLogicService } from './quiz-logic.service';

describe('QuizLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizLogicService = TestBed.get(QuizLogicService);
    expect(service).toBeTruthy();
  });
});
