import Button from "react-bootstrap/esm/Button";
import { useCarrito } from "../hooks/useCarrito";
import { BsCartPlus, BsCartX } from "react-icons/bs";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import ArticuloManufacturado from "../entities/ArticuloManufacturado";
import ArticuloInsumo from "../types/ArticuloInsumo";

type ArticuloProps = {
  articulo: ArticuloManufacturado | ArticuloInsumo;
};
const PublicacionIntrumento = ({ articulo }: ArticuloProps) => {

  const { addCarrito, removeCarrito, cart, removeItemCarrito } = useCarrito()

  const verificarArticuloCarrito = (product: ArticuloManufacturado | ArticuloInsumo) => {
    const flag = cart.some(item => String(item.articulo.id) == String(product.id));
    return flag;
  }

  const isArticuloCarrito = verificarArticuloCarrito(articulo)

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4  d-flex justify-content-center align-items-center">
              <img src={`${articulo.imagenes[0].url}`} className="card-img " style={{ width: "100%", height: "250px", objectFit: "fill" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body text-left">
                <h3 className="card-title">{articulo.denominacion}</h3>
                <h4 className="card-text">
                  <strong className="">$ {articulo.precioVenta}</strong>
                </h4>
                <p className="card-text">
                  <small className="text-muted">
                    {articulo.descripcion}
                  </small>
                </p>
              </div>

              <div className="mt-3">
                <Button variant="none"><CiSquareMinus size={30} className="m-2" onClick={() => removeItemCarrito(articulo)} /></Button>
                <Button variant="outline-secondary"
                  onClick={() => {
                    isArticuloCarrito
                      ? removeCarrito(articulo)
                      : addCarrito(articulo)
                  }}
                >
                  {
                    isArticuloCarrito
                      ? <BsCartX title="Quitar" size={30} />
                      : <BsCartPlus title="Comprar" size={30} />
                  }
                </Button>
                <Button variant="none" ><CiSquarePlus size={30} className="m-2" onClick={() => addCarrito(articulo)} /></Button>


              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PublicacionIntrumento;