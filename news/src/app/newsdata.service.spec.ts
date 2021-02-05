import { TestBed } from '@angular/core/testing';

import { NewsdataService } from './newsdata.service';

describe('NewsdataService', () => {
  let service: NewsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
