import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Input('title') message: string;
  @Input() subMessage: string;
  @Output() alertCreated: EventEmitter<string>;

  constructor() { 
    this.message = 'Message by default';
    this.subMessage = 'Submessage by default'
    this.alertCreated = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void{
    this.alertCreated.emit('Click realizado');
  }

}
