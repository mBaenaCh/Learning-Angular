import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model';
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

  cambiarEstado(tarea): void{
    if(tarea.estaCompleta === false){
      //Incompleto a completo
      tarea.estaCompleta = true;      
    } else {
      //Completo a incompleto
      tarea.estaCompleta = false;
    }
    console.log(tarea.estaCompleta);
  }

  eliminarTarea(tarea): void{
      this.tareas = this.tareas.filter(item => item!=tarea);
  }

}
