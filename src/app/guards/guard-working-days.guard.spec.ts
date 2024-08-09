import { TestBed } from '@angular/core/testing';

import { GuardWorkingDaysGuard } from './guard-working-days.guard';

describe('GuardWorkingDaysGuard', () => {
  let guard: GuardWorkingDaysGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardWorkingDaysGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
