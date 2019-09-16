import { TestBed } from '@angular/core/testing';

import { MyfromService } from './myfrom.service';

describe('MyfromService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyfromService = TestBed.get(MyfromService);
    expect(service).toBeTruthy();
  });
});
