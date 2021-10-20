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
    let intervalId = setInterval(() => {
      this.valorInicial--;
      if (this.valorInicial === 0) {
        clearInterval(intervalId);
      }
    }, 1000);

  }

}
