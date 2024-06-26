import ArticuloInsumo from "../../types/ArticuloInsumo";
import ArticuloManufacturado from "../../types/ArticuloManufacturado";
interface Props{
    cantidad: number;
    item : ArticuloManufacturado | ArticuloInsumo
}
export function CartItem({cantidad, item}: Props) {
    return (
        <div key={item.id}>
            <span>
                <div>
                    <strong>{item.denominacion}</strong> - ${Number(item.precioVenta) * cantidad}
                </div>
                <div>
                    <b>{cantidad} {cantidad == 1 ? 'unidad' : 'unidades'} </b>
                </div>
            </span>
            <hr></hr>
        </div>
    )
}