import { TestBed } from '@angular/core/testing';

import { ClientPersoService } from './client-perso.service';

describe('ClientPersoService', () => {
  let service: ClientPersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientPersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
