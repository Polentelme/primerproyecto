import { Producto } from "./producto";

export interface Pedido {
    idPedido: String;
    producto: Producto;
    cantidad: number;
    total: number;
}
