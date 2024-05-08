import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Animal[];
  constructor() {

    this.info = [{
      id: "",
      nombre: "Riquelme",
      edad: 0,
      raza: "Freezer philipps",
      imagen: "https://imgs.search.brave.com/8H2rIaf4j5tebcOcGHGK3xbq9PoY4jQeq5rin5nbIkU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5sbW5ldXF1ZW4u/Y29tL3AvOTAyOGI3/MGQyNjA2ZjIyMTFi/MjUyZmUzMjUwY2U5/NzQvYWRqdW50b3Mv/MTk1L2ltYWdlbmVz/LzAwNy82OTgvMDAw/NzY5ODM5OC83NzB4/MC9zbWFydC9yaXF1/ZWxtZWpwZy5qcGc",
      alt: "Imagen de freezelme",



    },
    {
      id: "",
      nombre: "Pablo Ledesma",
      edad: 0,
      raza: "heladera BC",
      imagen: "https://imgs.search.brave.com/1nno1Hj_XaoB9GUDCfuHsmtwOR83Fl_DVHUJUWdHrgA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Jv/Y2FqdW5pb3JzL2lt/YWdlcy80LzQ3L1Bh/YmxvX2xlZGVzbWEu/anBnL3JldmlzaW9u/L2xhdGVzdC9zY2Fs/ZS10by13aWR0aC1k/b3duLzI1MD9jYj0y/MDEyMDExOTE1NTI0/OCZwYXRoLXByZWZp/eD1lcw",
      alt: "imagen de ledesma",


    }
    ]
  }

}
