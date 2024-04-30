import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Animal[]; 
  constructor(){

    this.info =[ {
      id: "",
    nombre: "Riquelme",
    edad: 0,
    raza: "Freezer philipps",
    imagen: "https://imgs.search.brave.com/HGSeZlljUYzID4ztGvFODwJ4WM40HaKNzS1-eVRIH1s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGFnaW5hMTIu/Y29tLmFyL3N0eWxl/cy9mb2NhbF8zXzJf/MzAweDIwMC9wdWJs/aWMvMjAyNC0wMS84/MTA5NzUtcm9tLWMz/LWExbi0yMGVuLTIw/ZXNwbi5qcGc_aD0x/MjUwMjAzMCZpdG9r/PXNlTkt4RmhV" ,
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
