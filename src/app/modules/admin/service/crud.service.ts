import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import {AngularFirestore, AngularFirestoreCollection}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productoscollection: AngularFirestoreCollection<producto>

  constructor(private basedatos: AngularFirestore) {
    this.productoscollection = database.collection('producto');
   }
   //crear productos
   crearProducto(producto: Producto){
    return new promise(async(resolve, reject) => {
      try{
        //creamos numero identificativo para el producto en la base de datos

const Idproducto = this.database.createId();
// asignamos ID creado al atributo idproducto de la interfaz producto
producto.Idproducto; = Idproducto;

const resultado = await this.productoscollection.doc(Idproducto).set(producto);
resolve(resultado);
} catch (error) {
  reject (error);
}

    }
   }
   //obtener productos
   // editar productos
   //eliminar productos

}
