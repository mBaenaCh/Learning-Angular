import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Input('title') message: string;
  @Input() subMessage: string;

  constructor() { 
    this.message = 'Message by default';
    this.subMessage = 'Submessage by default'
  }

  ngOnInit(): void {
  }

}
