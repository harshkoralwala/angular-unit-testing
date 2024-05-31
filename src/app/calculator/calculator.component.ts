import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  name = ''
  constructor(private calc: CalculatorService) {}

  ngOnInit() {
    this.name = 'Working';
  }

  subtract(a: any, b: any) {
    return this.calc.subtract(a, b);
  }


}
