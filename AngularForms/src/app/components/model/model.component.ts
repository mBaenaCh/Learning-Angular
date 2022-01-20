import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;
  
  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.maxLength(10)
      ]),
      edad: new FormControl('', [
        this.validarEdad
      ]),
      identificacion: new FormControl(''),
      contraseña: new FormControl(''),
      repetirContraseña: new FormControl(''),
      correo: new FormControl(''),
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

  validarEdad(formControl: FormControl){
    const valor = formControl.value;

    const min = 18;
    const max = 90;

    if(valor < 18 && valor >= 90){
      return null;
    } else {
      return { edadvalidator: {min, max}};
    }
  }

}
