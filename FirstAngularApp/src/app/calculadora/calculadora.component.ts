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
    this.isCalculated = false;
  }

  ngOnInit(): void {
  }

  onClick($event): void {
      if(this.isCalculated){
        this.toCalculate = $event.target.innerText;
        this.isCalculated = false;
      } else {
        this.toCalculate += $event.target.innerText;
      }
  }

  onResult(): void{
    this.toCalculate = eval(this.toCalculate);
    this.isCalculated = true;
  }

}
