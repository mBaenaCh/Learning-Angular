import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './components/model/model.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/model' },
  { path: 'template', component: TemplateComponent},
  { path: 'model', component: ModelComponent},
  { path: '**', redirectTo: 'model'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
