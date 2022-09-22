import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  result = '';
  operator = '';
  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    this.result = eval(this.num1 + this.operator + this.num2);
  }
}
