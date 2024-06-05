import { PedidoDetalle } from "./PedidoDetalle";
import { Sucursal } from "./Sucursal";

export interface Pedido {
    id: number | null;
    eliminado: boolean;
    horaEstimadaFinalizacion: string;
    total: number;
    totalCosto: number;
    estado: Estado | null;
    tipoEnvio: string | null;
    formaPago: string | null;
    fechaPedido: Date | null;
    sucursal?: Sucursal;
    detallePedidos: PedidoDetalle[]
}

export enum Estado {
    PREPARACION,
    PENDIENTE,
    CANCELADO,
    RECHAZADO,
    ENTREGADO
}

export enum TipoEnvio {
    DELIVERY = "DELIVERY",
    TAKE_AWAY = "TAKE_AWAY"
}

export enum FormaPago {
    EFECTIVO = "EFECTIVO",
    MERCADO_PAGO = "MERCADO_PAGO"
}