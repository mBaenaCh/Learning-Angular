import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  titulo: string;
  idParrafo: number;
  constructor() { 
    this.titulo = "Greetings to you all!";
    this.idParrafo = 1;

    /* Timeout para evidenciar que pasados 3 segundos el mensaje del componente cambie */
    setTimeout(() => {
      this.titulo = "Another different message";
    }, 3000);
  }

  ngOnInit(): void {
  }

  printSomething(): string {
    return "This come from a method in my .ts file";
  } 
}
