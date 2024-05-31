import { Component } from '@angular/core';
import { CalculatorService } from './calculator/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-unit-testing';

  add(a: any, b: any) {
    if (typeof a !== 'number' || typeof b !== 'number')
      return "Invalid Numbers"
    return a + b;
  }



}
