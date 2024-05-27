import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
// componentes de material

const routes: Routes = [ {
  path:"registro" ,component:RegistroComponent
},
{
  path:"inicio-sesion",component:IniciosesionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  
  ],
  exports: [RouterModule,
   
  ]
})
export class AutentificacionRoutingModule { }
