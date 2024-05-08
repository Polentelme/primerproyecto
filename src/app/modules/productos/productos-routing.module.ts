import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { AlimentoComponent } from './pages/alimento/alimento.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';

const routes: Routes = [
  {path:"producto",component:ProductoComponent },
  {path:"alimentacion",component:AlimentoComponent},
  {path:"juguete",component:JugueteComponent},
  {path:"indumentaria",component:IndumentariaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
