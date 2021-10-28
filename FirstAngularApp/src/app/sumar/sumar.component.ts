import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {
  
  @Input() numeroA: number;
  @Input() numeroB: number;
  resultado: number;
  constructor() { 
    this.numeroA = 0;
    this.numeroB = 0;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  sumar(): void{
    this.resultado = this.numeroA + this.numeroB;
  }

}
