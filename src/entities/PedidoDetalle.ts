import ArticuloManufacturado from "./ArticuloManufacturado";

export interface PedidoDetalle {
    id : number;
    eliminado: boolean;
    cantidad : number;
    subTotal: number;
    articulo: ArticuloManufacturado;
}