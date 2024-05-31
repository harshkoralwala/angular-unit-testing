/* tslint:disable:no-unused-variable */

import { TestBed, } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
// import { HttpClient } from '@angular/common/http';

describe('Service: Calculator', () => {
  let calc: CalculatorService;
  // let httpClient: HttpClient;

  beforeEach(() => {
    calc = new CalculatorService()
    TestBed.configureTestingModule({
      declarations: [],
      providers: [CalculatorService]
    });
  });

  it('should be Initialized', () => {
    expect(calc).toBeTruthy();
  });
});
