import ArticuloManufacturadoDetalles from "./ArticuloManufacturadoDetalle";
import Categoria from "./Categoria";
import ImagenArticulo from "./ImagenArticulo";
import UnidadMedida from './UnidadMedida';

export default interface ArticuloManufacturado{
    id: number;
    eliminado: boolean;
    denominacion: string;
    precioVenta: number;
    imagenes: ImagenArticulo[]
    unidadMedida: UnidadMedida;
    categoria: Categoria;
    descripcion: string;
    tiempoEstimadoEnMinutos: number;
    preparacion: string;
    articuloManufacturadoDetalles: ArticuloManufacturadoDetalles[];
}