import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {    }
// input de la contraseña para ver los caracteres o no
  export  class FormFieldPrefixSuffixExample {
    hide = true;
    // importar la interfaz de uruario -> inicialiazar
    usuarios: Usuario={
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''

    }
    // creamos coleccion de usuario, tipo usuario para arrays
    coleccionusuarios: Usuario[] = [];

    //funcion para el registro de nuevos usuarios
    registrar(){
      //constante credenciales va a resguardar la informacion que ingrese el usuario
      const credenciales = {
        uid: this.usuarios.uid,
        nombre: this.usuarios.apellido,
        email: this.usuarios.email,
        rol: this.usuarios.rol,
        password: this.usuarios.password
      }
      //enviamos la nueva informacion como un nuevo objeto a la coleccion de usuarios
      this.coleccionusuarios.push(credenciales)
      //mostramos credenciales por consola

      
      console.log(credenciales)
      console.log (this.coleccionusuarios
      )
    }
}



