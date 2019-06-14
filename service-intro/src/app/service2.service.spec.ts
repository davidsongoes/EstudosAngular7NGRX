import { TestBed } from '@angular/core/testing';

import { Service2} from './service2.service';

describe('Service2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service2 = TestBed.get(Service2);
    expect(service).toBeTruthy();
  });
});
