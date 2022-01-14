import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() tareaCreada: EventEmitter<Tarea>;
  nuevaTarea: Tarea;
  hayError: boolean;
  textoError: string;

  constructor() { 
    this.tareaCreada = new EventEmitter();
    this.nuevaTarea = new Tarea();
    this.hayError = false;
    this.textoError = "No pueden haber campos vacios";
  }

  ngOnInit(): void {
  }

  onClick(): void {
    if(this.nuevaTarea.titulo === "" && this.nuevaTarea.descripcion === ""){
      this.hayError = true;
    } else {
      this.tareaCreada.emit(this.nuevaTarea);
      this.nuevaTarea = new Tarea();
      this.hayError = false;
    }
  }
}
