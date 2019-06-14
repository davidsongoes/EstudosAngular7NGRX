import { TestBed } from '@angular/core/testing';

import { Service1 } from './service1.service';

describe('Service1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service1 = TestBed.get(Service1);
    expect(service).toBeTruthy();
  });
});
