import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';

import { ProductoComponent } from './pages/producto/producto.component';
import { AlimentoComponent } from './pages/alimento/alimento.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    ProductoComponent,
    AlimentoComponent,
    JugueteComponent,
    IndumentariaComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    ProductoComponent,
    AlimentoComponent,
    JugueteComponent,
    IndumentariaComponent
    ]
})
export class ProductosModule { }
