import { TestBed } from '@angular/core/testing';

import { TestNew2Service } from './test-new2.service';

describe('TestNew2Service', () => {
  let service: TestNew2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNew2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
