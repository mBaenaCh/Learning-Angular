import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  message: string;
  constructor() { 
    this.message = "Greetings to you all!";
    /* Timeout para evidenciar que pasados 3 segundos el mensaje del componente cambie */
    setTimeout(() => {
      this.message = "Another different message";
    }, 3000);
  }

  ngOnInit(): void {
  }

  printSomething(): string {
    return "This come from a method in my .ts file";
  }
}
