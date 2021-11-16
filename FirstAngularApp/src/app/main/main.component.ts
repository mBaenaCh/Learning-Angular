import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() texto: string;

  constructor() { 
    //this.texto = "Inicializado desde el hijo"
    console.log("**** Constructor del componente Main");
    console.log("Aqui inicializo las propiedades del componente Main");
    console.log(`texto en constructor: ${this.texto}`);

  }

  ngOnChanges(changes: SimpleChange) {
    console.log("**** Metodo ngOnChanges");
    console.log(`texto on change: ${this.texto}`);
    console.log(`Valor anterior: ${changes['texto'].previousValue} - Valor posterior: ${changes['texto'].currentValue}`);
  }

  ngOnInit(): void {
    console.log("**** Metodo ngOnInit");
    console.log("Es implementado a partir de la interfaz OnInit");
    console.log("Permite ejecutar funciones necesarias en el inicio de la ejecucion del componente");
    console.log(`texto on init: ${this.texto}`);
  }

  ngAfterViewInit() {
    console.log("**** Metodo ngAfterViewInit");
    console.log("Se ejecuta cuando se renderiza el HTML y este es visible, osea despues de ngOnInit");
    console.log("Permite realizar cambios iniciales en el HTML u accion dentro de la vista del componente");
  }

  
}
