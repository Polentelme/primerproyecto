import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;

  public coleccionUsuariosLocales: Usuario[];

  constructor(){
this.coleccionUsuariosLocales = [

]

  }
  

  usuarios: Usuario = {
  uid: '',
  nombre: '',
  apellido: '',
  email: '',
  rol: '',
  password: '',

  }
  // funcion para inicir sesion 
  iniciarsesion(){
  const credenciales = {
  uid: this.usuarios.uid,
  nombre: this.usuarios.nombre,
  apellido: this.usuarios.apellido,
  email: this.usuarios.email,
  rol: this.usuarios.rol,
  password: this.usuarios.password

  }
   for(let i = 0; i < this.coleccionUsuariosLocales.length; i++ ){
    const usuariosLocal = this.coleccionUsuariosLocales [i];
     }
  }
  

    
  }


