import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { PadreComponent } from './components/padre/padre.component';
import { Hijo1Component } from './components/hijo1/hijo1.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MainComponent } from './components/main/main.component';
import { SemaforoComponent } from './components/semaforo/semaforo.component';
import { BuclesComponent } from './components/bucles/bucles.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DeseadosComponent } from './components/deseados/deseados.component';
import { SubrayadoDirective } from './directives/subrayado.directive';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Productos2Component } from './components/productos2/productos2.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { QuejasComponent } from './components/detalle/quejas/quejas.component';
import { FotosComponent } from './components/detalle/fotos/fotos.component';
import { EscritoresComponent } from './components/ejercicio-escritores/escritores/escritores.component';
import { DetalleEscritorComponent } from './components/ejercicio-escritores/detalle-escritor/detalle-escritor.component';

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
    FotosComponent,
    EscritoresComponent,
    DetalleEscritorComponent
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
