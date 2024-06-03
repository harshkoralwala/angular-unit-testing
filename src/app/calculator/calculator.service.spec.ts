/* tslint:disable:no-unused-variable */

import { TestBed, } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('Service: Calculator', () => {
  let calc: CalculatorService;
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

  it('should return "CalculatorService Works" ', () => {
    expect(calc.test()).toEqual("CalculatorService Works")
  })

  it('should call test function 3 times ', () => {
    spyOn(calc, 'test');
    calc.test();
    calc.test();
    calc.test();
    expect(calc.test).toHaveBeenCalled();
    expect(calc.test).toHaveBeenCalledTimes(3);
  })

});
