import ArticuloInsumo from "./ArticuloInsumo";
import ArticuloManufacturado from "./ArticuloManufacturado";

export interface PedidoDetalle {
    id : number | null;
    eliminado: boolean;
    cantidad : number;
    subTotal: number;
    articulo: ArticuloManufacturado | ArticuloInsumo;
}