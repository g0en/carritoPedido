import { PedidoDetalle } from "./PedidoDetalle";
import { Sucursal } from "./Sucursal";

export interface Pedido {
    id: number | null;
    eliminado: boolean;
    horaEstimadaFinalizacion: string;
    total: number;
    totalCosto: number;
    estado: Estado | null;
    tipoEnvio: TipoEnvio | null;
    formaPago: FormaPago | null;
    fechaPedido: Date | null;
    sucursal: Sucursal;
    pedidoDetalles: PedidoDetalle[]
}

export enum Estado {
    PREPARACION,
    PENDIENTE,
    CANCELADO,
    RECHAZADO,
    ENTREGADO
}

export enum TipoEnvio {
    DELIVERY,
    TAKE_AWAY
}

export enum FormaPago {
    EFECTIVO,
    MERCADO_PAGO
}