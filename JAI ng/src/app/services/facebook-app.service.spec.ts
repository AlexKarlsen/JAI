import { TestBed, inject } from '@angular/core/testing';

import { FacebookAppService } from './facebook-app.service';

describe('FacebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookAppService]
    });
  });

  it('should be created', inject([FacebookAppService], (service: FacebookAppService) => {
    expect(service).toBeTruthy();
  }));
});
