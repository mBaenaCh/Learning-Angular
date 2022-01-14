import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto2 } from '../models/producto2.model';

@Component({
  selector: 'app-productos2',
  templateUrl: './productos2.component.html',
  styleUrls: ['./productos2.component.css']
})
export class Productos2Component implements OnInit {

  @Input() productos: Producto2[];
  @Input() accion: string;
  @Output() productoSeleccionado: EventEmitter<Producto2>;
  constructor() { 
    this.productos = [];
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(producto): void{
    this.productoSeleccionado.emit(producto);
  }

}
