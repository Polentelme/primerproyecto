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
    /*
    ahora enviamos tanto el ID del producto (para identificarlo en firestore) 
    y la url de la imagen (para identificarlo en storage)
    id y url identifiacores propios de cada archivo en la base de datos
    */
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
    .then(respuesta => {
      alert("Se ha podido eliminar con éxito.");
    })
    .catch(error => {
      alert("Ha ocurrido un error al eliminar un producto: \n"+error);
    })
  }
  // EDITAR PRODUCTOS
  // Se envía y llama al momento que tocamos botón "Editar" de la tabla
  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;
    /*
      Toma los valores del producto seleccionado y los va a
      autocompletar en el formulario del modal (menos el ID)
    */
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  // VINCULA A BOTÓN "editarProducto" del modal de "Editar"
  editarProducto() {
    let datos: Producto = {
      // Solo idProducto no se modifica por el usuario
      idProducto: this.productoSeleccionado.idProducto,
      /* Los demás atributos reciben nueva información/ 
      valor desde el formulario */
      nombre: this.producto.seleccionado.nombre!,
      precio: this.producto.seleccionado.precio!,
      descripcion: this.producto.seleccionado.descripcion!,
      categoria: this.producto.seleccionado.categoria!,
      imagen: this.productoSeleccionado.imagen!,
      alt: this.producto.seleccionado.alt!
    }
    // verificamos si el usuario ingresa o no una nueva imagen
    if (this.imagen) {
      this.servicioCrud.subirImagen(this.nombre.imagen, this.imagen, "productos")
      .then(resp => {
        this.servicioCrud.obtenerUrlImagen(resp)
        .then(url => {
          datos.imagen = url; // actualizamos url de la imagen en los datos del formulario

          this.actualizarProducto(datos); // actualizamos los datos

          this.producto.reset(); // vaciar las casillas del formulario
        }}

        )
        .catch(error => {
          alert("hubo un problema al subir la imagen >:v \n"+error);

          this.producto.reset();
        })
        }
      }else{
      this.actualizarProducto(datos);
      }
        
      }
      actualizarProducto (datos: producto){}
      // Enviamos al método el id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      alert("El producto se ha modificado con éxito.");
    })
    .catch(error => {
      alert("Hubo un problema al modificar el producto: \n" + error);
    })
    }

    
  

