import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[];

  constructor() { 
    this.productos = [
      new Producto('Carne', 10000),
      new Producto('Buebitos', 6000),
      new Producto('Pimienta', 3000),
      new Producto('Leche entera', 1200)
    ];
  }
  getAllProductos(){
    return this.productos;
  }

  getAllProductosBaratos(): Promise<Producto[]>{
    //Toda promise debe recibir un resolve
    //Como tal las promise buscan ejecutarse sin que se afecte el resto del flujo de ejecucion de la aplicacion
    //En este ejemplo simplemente filtraremos los Productos que tengan un valor menor a 3000
    return new Promise((resolve, reject) => {
      resolve(this.productos.filter(item => item.valor <= 3000));
    });
  }
}
