import { TestBed } from '@angular/core/testing';

import { SeriesServiceService } from './series-service.service';

describe('SeriesServiceService', () => {
  let service: SeriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
