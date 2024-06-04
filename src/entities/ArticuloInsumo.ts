import Categoria from './Categoria';
import ImagenArticulo from './ImagenArticulo'
import UnidadMedida from './UnidadMedida';

export default interface ArticuloInsumo{
    id: number;
    eliminado: boolean;
    denominacion: string;
    precioVenta: number;
    imagenes: ImagenArticulo[];
    unidadMedida: UnidadMedida;
    categoria: Categoria;
    precioCompra: number;
    stockActual: number;
    stockMaximo: number;
    stockMinimo: number;
    esParaElaborar: boolean;
}