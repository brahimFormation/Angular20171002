import { TestBed, async, inject } from '@angular/core/testing';

import { ItemLoadGuard } from './item-load.guard';

describe('ItemLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemLoadGuard]
    });
  });

  it('should ...', inject([ItemLoadGuard], (guard: ItemLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
