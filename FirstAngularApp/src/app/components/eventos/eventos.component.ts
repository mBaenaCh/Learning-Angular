import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() { 
    this.mensaje = 'Mensaje inicial';
  }

  ngOnInit(): void {
  }

  onClick($event): void{
    alert('Button pressed');
    console.log($event)
  }

  onChange($event): void{
    /* target: El elemento sobre el cual se 
       value: El valor del targe
    */
    console.log($event.target.value)
  }

  onMouseEnters(): void{
    this.mensaje = 'Mouse dentro del div';
  }

  onMouseOut(): void {
    this.mensaje = 'Mouse fuera del div';
  }
  onChangeInput($event): void {
    //Este evento nos permite retornar los cambios sobre un input al añadir o quitar caracteres
    console.log($event.target.value);
  }

  onInput($event): void{
    //Este evento nos permite guardar el valor obtenido por un input en una variable
    this.mensaje = $event.target.value
  }

  onFocus(): void{
    console.log("The element is focused");
  }

  onBlur(): void{
    console.log("The element ain't got focus");
  }
}
