import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //definimos coleccion de productos locales
  coleccionProductos: Producto [] = [];

  //variable local para seleccionar un producto especifico 
  productoSeleccionado!: Producto;

  //variable local para manejar estado de un modal
  modalVisible: boolean = false;

  constructor( public servicioCrud: CrudService) {}

  ngOnInit(): void 
}
