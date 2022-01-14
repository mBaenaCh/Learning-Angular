import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumarComponent } from './sumar/sumar.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AlertaComponent } from './alerta/alerta.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MainComponent } from './main/main.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BuclesComponent } from './bucles/bucles.component';
import { ProductosComponent } from './productos/productos.component';
import { DeseadosComponent } from './deseados/deseados.component';
import { SubrayadoDirective } from './directives/subrayado.directive';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Productos2Component } from './productos2/productos2.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    EventosComponent,
    SumarComponent,
    CronometroComponent,
    CalculadoraComponent,
    AlertaComponent,
    ListaComponent,
    FormularioComponent,
    MainComponent,
    SemaforoComponent,
    BuclesComponent,
    ProductosComponent,
    DeseadosComponent,
    SubrayadoDirective,
    Formulario2Component,
    Productos2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
