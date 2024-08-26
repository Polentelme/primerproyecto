import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card-alimentacion',
  templateUrl: './card-alimentacion.component.html',
  styleUrls: ['./card-alimentacion.component.css']
})
export class CardAlimentacionComponent {
  coleccionProductos: Producto [] = [];
  coleccionAlimentacion: Producto [] = [];

  productoSeleccionado!: Producto;

  constructor(public servicioCrud: CrudService) {}

  ngOnInit (): void{
// accedemos a metodo obtener producto y nos suscribimos a los cambios
// recibimos notificacion ante modificaciones 

  }






  // funcion para filtrar los productos de tipo "alimentaciob"
  mostrarProductoAlimentacion (){
    this.c
  }
}
