import { TestBed } from '@angular/core/testing';

import { GenerateBookServiceService } from './generate-book-service.service';

describe('GenerateBookServiceService', () => {
  let service: GenerateBookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
