import { TestBed } from '@angular/core/testing';

import { NoService } from './no.service';

describe('NoService', () => {
  let service: NoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
