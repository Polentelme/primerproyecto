import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/components/inicio/inicio.component';

const routes: Routes = [
  // ruta que se muestra por defecto
  {
    path: "",component:InicioComponent
  },
  // ruta que nos vincula al modulo de inicio y todo su contenido
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
