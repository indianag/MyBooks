import { TestBed } from '@angular/core/testing';

import { FormBookService } from './form-book.service';

describe('FormBookService', () => {
  let service: FormBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
