import { TestBed } from '@angular/core/testing';

import { RoutingContentService } from './routing-content.service';

describe('RoutingContentService', () => {
  let service: RoutingContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
