import { TestBed } from '@angular/core/testing';

import { AbapService } from './abap.service';

describe('AbapService', () => {
  let service: AbapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
