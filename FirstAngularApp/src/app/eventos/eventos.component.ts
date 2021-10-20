import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    alert('Button pressed');
  }
}
