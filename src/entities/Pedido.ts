import { PedidoDetalle } from "./PedidoDetalle";
import { Sucursal } from "./Sucursal";

export interface Pedido {
    id: number;
    eliminado: boolean;
    horaEstimadaFinalizacion: string;
    total: number;
    totalCosto: number;
    estado: string;
    tipoEnvio: string;
    formaPago: string;
    fechaPedido : Date;
    sucursal: Sucursal;
    pedidoDetalles : PedidoDetalle[]
}