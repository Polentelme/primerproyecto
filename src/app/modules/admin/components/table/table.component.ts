import { assertInInjectionContext, Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { race } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // ! <- tomar valores vacíos

  modalVisibleProducto: boolean = false;

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    // subscribe -> método de notificación de cambios (observable)
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        Idproducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }

      //enviamos nombre y url de la imagen; definimos carpeta de imagenes como "produccion"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
      .then(resp => { 
        //encapsulamos respuesta y enviamos la informacion obtenida
        this.servicioCrud.obtenerUrlImagen(resp)
        .then(url => {

        })

      })
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con éxito.");
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar un producto.");
        })
    }
  }

  // cargar imagenes
  cargarImagen(event: any){
    // variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];
   // variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader();

    if (archivo != undefined) {
      // llamami
      reader.readAsDataURL(archivo);

      reader.onloadend = () => {
        let url = reader.result;5

        if(url !=null ){
          this.nombreImagen = archivo.name;

          this.imagen = url.toString();

        }
      }
    }
  }

  // función vinculada al modal y el botón de la tabla
  mostrarBorrar(productoSeleccionado: Producto){
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert("Se ha podido eliminar con éxito.");
    })
    .catch(error => {
      alert("Ha ocurrido un error al eliminar un producto: \n"+error);
    })
  }
  // editar productos
  editarProducto () {
    let datos: Producto = {
      //solo idProducto no se modifica por el usuario
      Idproducto: this.productoSeleccionado.Idproducto,
      /*los demas atributos reciben nueva informacion desde el 
      formulario */ 
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!

    }

    this.servicioCrud.modificarProducto(this.productoSeleccionado.Idproducto, datos)
    .then(producto =>{
      alert("el producto se ha modificado con exito.");
    })
    .catch (error => {
   alert ("hubo un problema al modificar el producto: ")
    });
    
  }
  
}
// editar productos

