import { Component } from '@angular/core';
// Importamos interfaz de Card
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Definimos propiedad pública como INFO del tipo ARRAY
  public info: Card[];

  constructor(){
    this.info = [
      {
        idCard: "1",
        titulo: "Mandarinas",
        descripcion: "Son naranjas y de otoño",
        imagen: "https://image.apost.com/media/articletranslation/2018/04/27/13/38405260ab27a8c48856bb1d9dc0ec84_500x1.jpg",
        alt: "Foto de mandarinas"
      },
      {
        idCard: "2",
        titulo: "Manzana",
        descripcion: "Son rojas o verdes",
        imagen: "",
        alt: "Foto de una manzana"
      },
      {
        idCard: "3",
        titulo: "Melón",
        descripcion: "Es de verano",
        imagen: "",
        alt: "Imagen de un melón"
      }
    ]
  }
}