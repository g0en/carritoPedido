import Categoria from "./Categoria";
import ImagenArticulo from "./ImagenArticulo";
import UnidadMedida from "./UnidadMedida";

export default interface Articulo{
    id: number;
    eliminado: boolean;
    denominacion: string;
    precioVenta: number;
    imagenes: ImagenArticulo[];
    unidadMedida: UnidadMedida;
    categoria: Categoria;
}