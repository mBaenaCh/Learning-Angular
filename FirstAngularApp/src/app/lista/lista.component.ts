import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() tareas: Tarea[];
  theTextToShow: string;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  mostrarTareas() {
    let estructura = '<ul>';
    for (let tarea of this.tareas){
      estructura += `<li>${tarea.titulo} - ${tarea.descripcion}</li>`
    }
    estructura+= '</ul>';
    return estructura;
  }

}
