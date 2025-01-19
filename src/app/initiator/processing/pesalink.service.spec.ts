import { TestBed } from '@angular/core/testing';

import { PesalinkService } from './pesalink.service';

describe('PesalinkService', () => {
  let service: PesalinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesalinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
