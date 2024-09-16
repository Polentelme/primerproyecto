import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import {getDownloadURL, getStorage, UploadResult, uploadString, deleteObject, ref} from 'firebase/Storage'
/*
 getDownloadURL -> para obtener la url de descarga de una imagen subida 
 getstroage -> para obtener la instacia de almacenamiento
 ref -> para crear referencias a las ubicaciones en el almacenamiento
 upload result -> tipo que representa 
 uploadstring -> para subir imagenes en formato de cadena
 deleteobject -> para eliminar un espacio en el almacenamiento
*/

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Definimos colección para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  //definir variable "respuesta" que podra subir resultados 
  private respuesta!: UploadResult

  //inicializar servicio de storage
  private storage = getStorage();

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('producto');
  }

  // CREAR productos -> obtiene datos del formulario y url de la imagen
  crearProducto(producto: Producto, url: string){
    return new Promise(async(resolve, reject) => {
      try{
        // Creamos número identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

        // Asignamos ID creado al atributo idProducto de la interfaz Producto
        producto.Idproducto = idProducto;
      
        //asignamos url recibidad el paramtero e atributo "imagen" de interfaz producto
        producto.imagen = url;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      } catch (error){
        reject(error);
      }
    })
  }

  // OBTENER productos
  obtenerProducto(){
    /*
      snapshotChanges => toma captura del estado de los datos
      pipe => tuberías que retornan un nuevo arreglo
      map => "mapea" o recorre esa nueva información
      a => resguarda la nueva información y la envía como un documento 
    */
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  // EDITAR productos
  modificarProducto(idProducto: string, nuevaData: Producto){
    /*
      Accedemos a la colección "productos" de la Base de Datos, buscamos el ID del 
      producto seleccionado y lo actualizamos con el método "update", enviando la 
      nueva información
    */
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
  }

  // ELIMINAR productos
  eliminarProducto(idProducto: string, imagenUrl : string){
    return new Promise((resolve, reject) => {
      try{
        // definimos referencuias localmente de storage
        const storage = getStorage ();
        //obtiene la referencia dsde el almacenamiento de storage   
        const referenciaImagen = ref (storage, imagenUrl);
        

        const respuesta = this.productosCollection.doc(idProducto).delete();

        resolve (respuesta);
      }
      catch(error){
        reject (error);
      }
    })
  }
  //obtener URL de imagenes 
  obtenerUrlImagen(respuesta: UploadResult){
    //
    return getDownloadURL (respuesta.ref);
  }

/**
 * parametros definidos
 * @param {string }nombre <-- nombre de la imagen
 * @param {any} imagen <- tipos de imagenes que se pueden subir (extension)
 * @param {string }ruta <- ruta de almacenamiento de las imagenes 
 * @returns <- se retorna lo obtenido
 */

  // subir imagenes con sus referencias
  async subirImagen (nombre: string, imagen: any, ruta: string){
    try{
      // crear una referencia de imagen
      // accede a storage (almacenamiento), ruta (carpeta) / nombre (nombreImagen)
   let referenciaImagen = ref(this.storage, ruta + '/' + nombre);

   //asignarle a la respuesta la informacion de las imagenes subidas
   this.respuesta = await uploadString (referenciaImagen, imagen, 'data_url')

   .then(resp => {
    return resp;
   })

   return this.respuesta;
    }
    catch (error) {
      console.log(error);
      return this.respuesta;   
    }
  }
}