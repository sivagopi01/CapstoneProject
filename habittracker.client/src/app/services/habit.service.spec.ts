import { TestBed } from '@angular/core/testing';

import { HabitServiceService } from './habit.service';

describe('HabitServiceService', () => {
  let service: HabitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
