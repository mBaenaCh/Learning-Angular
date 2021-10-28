import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  @Input() initialValue: number;
  @Output() stopCount: EventEmitter<string>;
  pressed: boolean;

  constructor() {
    this.initialValue = 10;
    this.stopCount = new EventEmitter;
    this.pressed = false;
  }

  ngOnInit(): void {
  }

  conteo(): void {
    this.pressed = true;
    let intervalId = setInterval(() => {
      this.initialValue--;
      if (this.initialValue === 0 || this.pressed === false) {
        clearInterval(intervalId);
      }
    }, 1000);

  }

  emitStopTimer(){
    this.pressed = false;
    this.stopCount.emit('Stoped at: '+this.initialValue.toString());
  }

}
