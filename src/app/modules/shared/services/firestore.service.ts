import { Injectable } from '@angular/core';
// cloud firestroe -> accedemos a las colecciones 
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario'; 



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /* definimos de forma privada la coleccion de usuarios para que no sea acccesible en toa la aplicacion.
  lo definimos como una coleccion de firestore que respeta la estructura de nuestra interfaz 'Usuario'*/
  private usuariosCollection: AngularFirestoreCollection<Usuario> 

  constructor(private database: AngularFirestore) {
    /* usuarioscollection va a definir la nueva coleccion 'usuarios' que estara en nuestra 
    base de datos*/
    this.usuariosCollection = this.database.collection<Usuario>('Usuarios');
   }
}
