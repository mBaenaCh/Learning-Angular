import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { QuejasComponent } from './components/detalle/quejas/quejas.component';
import { FotosComponent } from './components/detalle/fotos/fotos.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'info'},
  {path: 'info', component: InfoComponent, canActivate:[RandomGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'productos/:productoId', component: DetalleProductoComponent, children: [
    {path: 'quejas', component: QuejasComponent},
    {path: 'fotos', component: FotosComponent},
  ]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
