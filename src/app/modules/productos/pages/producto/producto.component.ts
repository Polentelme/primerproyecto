import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/producto';
import Swal from "sweetalert2";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
 //string que modificara el valor de @input en el componente hijo
  product: string = '';

  productosCarrusel: Producto[] = []

  productoAnadido(producto:Producto){


    this.product = `${producto.nombre} : $${producto.precio}`;

try{
  this.productosCarrusel.push(producto);

  Swal.fire({
  title: 'BIEN AHI!',
  text: 'HA AÑADIDO EL PRODUCTO CON EXITO',
  icon: 'info',
})
}
catch (error)
{ 
  Swal.fire({
    title: 'MAL AHI!',
    text: 'HA OCURRIDO UN ERROR\n'+error,
    icon: 'info',
  })
}
    

  }
}
