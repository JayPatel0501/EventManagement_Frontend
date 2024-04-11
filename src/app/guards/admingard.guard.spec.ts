import { TestBed } from '@angular/core/testing';

import { AdmingardGuard } from './admingard.guard';

describe('AdmingardGuard', () => {
  let guard: AdmingardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmingardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
