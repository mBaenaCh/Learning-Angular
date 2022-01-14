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
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { QuejasComponent } from './components/detalle/quejas/quejas.component';
import { FotosComponent } from './components/detalle/fotos/fotos.component';

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
    Productos2Component,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    DetalleProductoComponent,
    QuejasComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
