import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-deseados',
  templateUrl: './deseados.component.html',
  styleUrls: ['./deseados.component.css']
})
export class DeseadosComponent implements OnInit {

  @Input() productosDeseados: Producto[];

  constructor() {
    this.productosDeseados = [];

  }

  ngOnInit(): void {

  }

  calcularTotalCarrito(): number {
    /*
    if (this.productosDeseados) {
      return this.productosDeseados.map(item => item.valor).reduce((prev, next) => prev + next);
    } else {
      return 0;
    }*/
    /* Otra forma alterna es recorriendo el array de productos que recibimos como input*/
    let resultado = 0;
    for(let producto of this.productosDeseados){
      resultado += (producto.valor * producto.cantidad);
    }
    return resultado;
  }

  onClickBorrar(indice) :void{
    /* Debemos verificar si el valor a eliminar tiene cantidad 1, para poder realizar esto */
    if(this.productosDeseados[indice].cantidad == 1){
      this.productosDeseados.splice(indice, 1)
    /* De lo contrario, solo reduciremos la cantidad del producto seleccionado */
    } else { 
      this.productosDeseados[indice].cantidad--;
    }
      
  }
}
