import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Tarea} from '../app/models/tarea.model';
import { Producto } from './models/producto.model';
import { Producto2 } from './models/producto2.model';
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
  switchVarString: string;
  switchVarNumber: number;
  arrComidas: Producto[];
  arrBebidas: Producto[];
  arrProductosDeseados: Producto[];
  configInputDirectivaCustom: any;
  arrDepartamentos: string[];
  arrProductos: Producto2[];
  arrProductosCompra: Producto2[];

  constructor(private router: Router){
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
    this.switchVarString = 'opt21';
    this.switchVarNumber = 1;
    this.arrComidas = [ new Producto('Hamburguesa', 11500), 
                        new Producto('Pizza', 24000), 
                        new Producto('Cordon blue', 28000),
                        new Producto('Arepa rellena', 9800),
                        new Producto('Empanada', 1200)
                      ];
    this.arrBebidas = [ new Producto('Gaseosa', 3700),
                        new Producto('Agua', 3700),
                        new Producto('Cerveza', 6000)
                      ];
    this.arrProductosDeseados = [];
    this.configInputDirectivaCustom = {
      colorHover: 'cyan',
      colorNoHover: 'orange'
    };
    this.arrDepartamentos = ["Lacteos", "Carnicos", "Harinas", "Bebidas", "Aceites", "Aderezos"];
    this.arrProductos = [];
    this.arrProductosCompra = [];
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
  /* Ejercicio carrito de compras 
  onRecibirProducto($event){
       Dado que manejare cantidades de productos
       debo verificiar si el producto que voy a ingresar ya se encuentra en el arreglo 
       Finalmente, el que encuentre es aquel que voy a modificar para incrementar su cantidad
       de lo contrario, ingreso el nuevo elemento e incremento su cantidad 
    const productoEncontrado=this.arrProductosDeseados.find(producto => producto.nombre === $event.nombre);
    if(productoEncontrado){
      productoEncontrado.cantidad++;  
    } else {
      $event.cantidad++;
      this.arrProductosDeseados.push($event);
    }
    
  }*/

  onRecibirProductoCreado($event): void{
    this.arrProductos.push($event);
  }

  onRecibirProductoComprado($event): void{
    this.arrProductosCompra.push($event);
    this.arrProductos = this.arrProductos.filter(item => item!=$event);
  }

  onRecibirProductoQuitado($event): void{
    this.arrProductosCompra = this.arrProductosCompra.filter(item => item!=$event);
  }

  onClick(ruta: string) {
    this.router.navigate([ruta]);
  }
}
