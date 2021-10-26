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

  onClick($event): void{
    alert('Button pressed');
    console.log($event)
  }

  onChange($event): void{
    console.log($event.target.value)
  }
}
