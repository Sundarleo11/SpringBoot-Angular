import { TestBed } from '@angular/core/testing';

import { MyLoginServiceService } from './my-login-service.service';

describe('MyLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLoginServiceService = TestBed.get(MyLoginServiceService);
    expect(service).toBeTruthy();
  });
});
