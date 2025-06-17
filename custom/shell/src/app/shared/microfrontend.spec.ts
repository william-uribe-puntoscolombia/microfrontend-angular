import { TestBed } from '@angular/core/testing';

import { Microfrontend } from './microfrontend';

describe('Microfrontend', () => {
  let service: Microfrontend;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Microfrontend);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
