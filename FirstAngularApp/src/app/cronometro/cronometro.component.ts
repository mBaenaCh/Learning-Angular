import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  valorInicial: number;

  constructor() {
    this.valorInicial = 10;
  }

  ngOnInit(): void {
  }

  conteo(): void {
    var intervalId = setInterval(() => {
      this.valorInicial = this.valorInicial - 1;
      if (this.valorInicial === 0) {
        clearInterval(intervalId);
      }
    }, 1000);

  }

  restar(): void {
    this.valorInicial = this.valorInicial - 1;
  }

}
