import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  toCalculate: string;
  isCalculated: boolean;
  constructor() { 
    this.toCalculate = ' ';
  }

  ngOnInit(): void {
  }

  onClick($event): void {
    if(this.isCalculated === true){
      this.toCalculate = '';
    } else {
      this.toCalculate += $event.target.value;
      console.log($event.target.value);
    }
  }

  onSolve(): void {
    this.toCalculate = eval(this.toCalculate);
    this.isCalculated = true;
  }
}
