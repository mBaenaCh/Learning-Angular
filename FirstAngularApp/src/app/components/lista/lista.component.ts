import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() tareas: Tarea[];

  constructor() {

  }

  ngOnInit(): void {
    
  }

  cambiarEstado(tarea: Tarea): void{
    if(tarea.estaCompleta === false){
      //Incompleto a completo
      tarea.estaCompleta = true;      
    } else {
      //Completo a incompleto
      tarea.estaCompleta = false;
    }
    console.log(tarea.estaCompleta);
  }

  eliminarTarea(indice): void{
    /*Este metodo podria ser menos eficiente si se tiene un conjunto de datos mayor dado que tiene que buscar en 
      toda la estructura de datos, comparar uno por uno y eliminar aquel que cumple la condicion
      this.tareas = this.tareas.filter(item => item!=tarea); */

    //Podriamos usar el metodo splice, el cual encuentra un indice y en funcion de este elimina cierta cantidad de elementos
      this.tareas.splice(indice, 1);
  }

}
