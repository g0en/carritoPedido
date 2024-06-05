import DataModel from "./DataModel";
import Domicilio from "./Domicilio"; // Asumiendo que tienes interfaces definidas para estas entidades
import Sucursal from "./Sucursal";
import Factura from "./Factura";
import Cliente from "./Cliente";
import Empleado from "./Empleado";
import {DetallePedido} from "./DetallePedido"; // Asumiendo que tienes una interfaz para detalles de pedidos

export  interface Pedido extends DataModel<Pedido> {
  horaEstimadaFinalizacion: string; 
  total: number; 
  totalCosto: number; 
  estado: Estado | null; 
  tipoEnvio: TipoEnvio; 
  formaPago: FormaPago; 
  fechaPedido: string | null; 
  domicilio: Domicilio | null; 
  sucursal: Sucursal | null; 
  factura: Factura | null; 
  cliente: Cliente|null; 
  detallePedidos: DetallePedido[]; 
  empleado: Empleado | null;
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