import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {
  
  numeroA: number;
  numeroB: number;
  resultado: number;
  constructor() { 
    this.numeroA = 78;
    this.numeroB = 3;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  sumar(): void{
    this.resultado = this.numeroA + this.numeroB;
  }

}
