import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { AuthService } from '../../autentificacion/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  pedido:Pedido ={
    idPedido:'',
    producto: {
      Idproducto:'',
      nombre:'',
      precio:0,
      descripcion:'',
      categoria:'',
      imagen:'',
      alt:'',
      stock:0,

    },
    cantidad:0,
    total:0,
  }

  private pedidosColeccion : AngularFirestoreCollection<Pedido>

  private uid:string │ null = null;


  constructor(
    private servicioAuth:AuthService,
    private ServicioFirestore:AngularFirestore,
    public ServicioRutas:Router 
  ) { 
    this.pedidosColeccion = this.ServicioFirestore.collection(`usuarios/${this.uid}/pedido`);
  }
  // inicializa el carrito y a su coleccion de pedidos
      iniciarCarrito(){
      this.servicioAuth.obtenerUid().then(uid => {
      this.uid = uid

      if (this.uid == null){
      console.error('no se obtuvo el UID. intente iniciar sesion');

      this.ServicioRutas.navigate(['iniciar-sesion']);

      } else {
       this.pedidosColeccion = this.ServicioFirestore.collection(`usuarios/${this.uid}/pedido`)
       }
      
      })
      }
// obtiene los productos que ya esten dentro del pedido
      obtenerCarrito(){
      return this.pedidosColeccion.snapshotChanges().pipe(map(action=>
      action.map(a => a.payload.doc.data())))
      }

      crearPedido(producto:Producto,stock:number){
        try {
          const idPedido = this.ServicioFirestore.createId();

        this.pedido.idPedido = idPedido;
        this.pedido.producto = producto; 
        this.pedido.cantidad = stock;
        this.pedido.total = producto.precio*stock;

        this.pedidoscoleccion.doc(idPedido).set(this.pedido);
        } catch (error) {
          Swal.fire({
            title:'Uy',
            text:'ocurrio un error al subir su producto\n'+error,
            icon:'error'
          })
        }
        borrarPedido(pedido:Pedido){
          try {
            this.pedidosColeccion.doc(Pedido.idPedido).delete();

            Swal.fire({
              title:`${pedido.producto.nombre} ha sido borrado`,
              text:'ha borrado su producto con exito'
              icon:'info'
            })
            
          } catch (error) {
            Swal.fire({
              title:'uy',
              text: 'ha ocurrido un error: \n'+error, 
               icon: 'error'
            } 
            )
            
          }
        }

      }


}



