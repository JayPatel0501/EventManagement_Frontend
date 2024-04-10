import { TestBed } from '@angular/core/testing';

import { ActivityServiecService } from './activity-serviec.service';

describe('ActivityServiecService', () => {
  let service: ActivityServiecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityServiecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
