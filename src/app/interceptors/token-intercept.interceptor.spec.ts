import { TestBed } from '@angular/core/testing';

import { TokenInterceptInterceptor } from './token-intercept.interceptor';

describe('TokenInterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptInterceptor = TestBed.inject(TokenInterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
