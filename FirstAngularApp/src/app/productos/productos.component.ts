import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() tipoProducto: string;
  @Input() productos: Producto[];
  @Output() productoSeleccionado: EventEmitter<Producto>;

  constructor() {
    this.tipoProducto = "";
    this.productos = [];
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClickProducto(producto: Producto){
    this.productoSeleccionado.emit(producto);
  }
}
