import ArticuloInsumo from "./ArticuloInsumo";


export default interface ArticuloManufacturadoDetalles{
    id: number;
    eliminado: boolean;
    cantidad: number;
    articuloInsumo: ArticuloInsumo;
}