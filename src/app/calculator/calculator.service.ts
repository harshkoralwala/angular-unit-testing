import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {}

  subtract(a: any, b: any) {
    if (typeof a !== 'number' || typeof b !== 'number')
      return "Invalid Numbers"
    return a - b;
  }
}
