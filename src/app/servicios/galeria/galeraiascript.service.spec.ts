import { TestBed } from '@angular/core/testing';

import { GaleraiascriptService } from './galeraiascript.service';

describe('GaleraiascriptService', () => {
  let service: GaleraiascriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleraiascriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
