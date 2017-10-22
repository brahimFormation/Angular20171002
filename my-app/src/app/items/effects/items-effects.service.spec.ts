import { TestBed, inject } from '@angular/core/testing';

import { ItemsEffectsService } from './items-effects.service';

describe('ItemsEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsEffectsService]
    });
  });

  it('should be created', inject([ItemsEffectsService], (service: ItemsEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
