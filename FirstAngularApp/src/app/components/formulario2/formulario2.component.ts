import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto2 } from '../../models/producto2.model';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  @Input() departamentos: string[];
  @Output() productoCreado: EventEmitter<Producto2>;
  textoError: string;
  hayError: boolean;
  producto: Producto2;

  constructor() {
    this.departamentos = [];
    this.productoCreado = new EventEmitter();
    this.hayError = false;
    this.textoError = "El nombre del producto o departamento no puede estar vacio";
    this.producto = new Producto2();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    if(this.producto.nombre === '' || this.producto.departamento === ''){
      this.hayError = true;
    } else {
      this.productoCreado.emit(this.producto);
      this.producto = new Producto2();
      this.hayError = false;
    }
  }
}
