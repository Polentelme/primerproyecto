import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { CardAlimentacionComponent } from './modules/producto/components/card-alimentacion/card-alimentacion.component';



@NgModule({
  declarations: [
    AppComponent,
    CardAlimentacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
