import { TestBed } from '@angular/core/testing';

import { ForgetAuthService } from './forget-auth.service';

describe('ForgetAuthService', () => {
  let service: ForgetAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
