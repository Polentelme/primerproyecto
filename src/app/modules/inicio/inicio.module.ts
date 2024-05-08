import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { CardComponent } from './components/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
  ]
})
export class InicioModule { }
