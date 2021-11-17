import { Component } from '@angular/core';
import {Tarea} from '../app/models/tarea.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular playground';
  titles: string[];
  numbers: number[];
  receivedAlert: string;
  textField: string;
  someObject: any;
  arrTareas: Tarea[];
  varTexto: string;
  estiloParrafo: any;
  mostrarParrafo: boolean;

  constructor(){
    this.receivedAlert = '';
    this.titles = ['Angular', 'Vue', 'React'];
    this.numbers = Array.from({length: 10}, () => Math.floor(Math.random()*10));
    this.textField = 'Initial value';
    this.someObject = {};
    this.arrTareas = [];
    this.varTexto = 'Texto definido en el componente padre';
    this.estiloParrafo = {
      color: 'red',
      fontSize: '24px'
    };
    this.mostrarParrafo = true;
  }

  alertReceived($event): void{
    this.receivedAlert = $event;
  }

  stopCountReceived($event): void{
    console.log($event);
  }

  tareaRecibida($event): void {
    this.arrTareas.push($event);
  }

  ngOnInit(){
    /*let cont=0;
    setInterval( () => {
      this.varTexto = `Cambio desde el padre ${cont++}`;
    }, 2000);*/
    this.varTexto = 'Cambio desde el ngOnInit del padre';
  }

  cambiaColor(pColor: string) {
    if(pColor === 'rosa'){
      this.estiloParrafo.color = 'pink';
    } else if(pColor === 'amarillo') {
      this.estiloParrafo.color = 'yellow';
    }
  }

  onChange($event){
    this.estiloParrafo.fontSize = `${$event.target.value}px`
  }

  onClickMostrarParrafo(){
    this.mostrarParrafo = !this.mostrarParrafo;
  }
}
