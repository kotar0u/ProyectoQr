import { TestBed } from '@angular/core/testing';

import { ApiControllerService } from './api-controller.service';

describe('ApiControlerService', () => {
  let service: ApiControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
