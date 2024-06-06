import { useCarrito } from '../../hooks/useCarrito';
import { CartItem } from './CartItem';
import { Button, Col, Container, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { createPreferenceMP, savePedido } from '../../services/PedidoService';
import { FormaPago, Pedido, TipoEnvio, PedidoDto, Estado } from '../../types/Pedido';
import { useNavigate } from 'react-router-dom';
import CheckoutMP from './CheckoutMP';
import PreferenceMP from '../../entities/PreferenceMP';
import { useState } from 'react';
import { DetallePedido } from '../../types/DetallePedido';

export function Carrito() {
  const { cart, limpiarCarrito, totalPedido } = useCarrito();
  const [idPreference, setIdPreference] = useState<string>('');
  const [tipoEnvio, setTipoEnvio] = useState<TipoEnvio | null>(null);
  const [formaPago, setFormaPago] = useState<FormaPago | null>(null);
  const navigate = useNavigate();

  const mostrarCarritoJSON = () => {
    console.log(cart);
  }

  const getPreferenceMP = async () => {
    const total = cart.reduce((acc: number, item: DetallePedido) => acc + (item.cantidad * Number(item.articulo.precioVenta)), 0);

    if (total > 0) {
      const pedido: PedidoDto = {
        estado: Estado.PREPARACION,
        tipoEnvio: tipoEnvio,
        formaPago: formaPago,
        domicilio: null,
        sucursalId: 1,
        clienteId: 1,
        detallePedidos: cart,
        empleadoId: 1,
        id: null
      };
      const response: PreferenceMP = await createPreferenceMP(pedido);
      console.log("Preference id: " + response.id);
      if (response)
        setIdPreference(response.id);
    } else {
      alert("Agregue al menos un plato al carrito");
    }
  }

  const save = async () => {
    const total = cart.reduce((acc: number, item: DetallePedido) => acc + (item.cantidad * Number(item.articulo.precioVenta)), 0);

    if (total > 0 && tipoEnvio !== null && formaPago !== null) {
      const pedido: PedidoDto = {
        estado: Estado.PENDIENTE,
        tipoEnvio: tipoEnvio,
        formaPago: formaPago,
        domicilio: {
          calle: "Ameghino",
          numero: 1311,
          cp: 5501,
          localidadId: 1,
          id: null
        },
        sucursalId: 1,
        clienteId: 1,
        detallePedidos: cart,
        empleadoId: 1,
        id: null
      };

      await savePedido(pedido);
    } else {
      alert("Agregue al menos un plato al carrito y seleccione un tipo de envío y una forma de pago");
    }
  }

  const handleSave = () => {
    if (tipoEnvio !== null && formaPago !== null) {
      save();
    } else {
      alert("Seleccione un tipo de envío y una forma de pago antes de finalizar el pedido");
    }
  }

  const handleTipoEnvioSelect = (tipo: TipoEnvio) => {
    setTipoEnvio(tipo);
    if (tipo === TipoEnvio.DELIVERY) {
      setFormaPago(FormaPago.MERCADO_PAGO);
    } else {
      setFormaPago(null);
    }
  }

  const handleFormaPagoSelect = (forma: FormaPago) => {
    setFormaPago(forma);
  }

  return (
    <>
      <Container>
        <Row>
          <label className='cart-button'>
            <i>Items del Pedido</i>
            <hr></hr>
          </label>

          <aside className='cart'>
            <ul>
              {cart.map((detalle, index) => (
                <CartItem
                  key={index}
                  item={detalle.articulo}
                  cantidad={detalle.cantidad}
                />
              ))}
            </ul>

            {/* <button onClick={mostrarCarritoJSON}>MOSTRAR CART JSON</button> */}
          </aside>
        </Row>
        <Row>
          {totalPedido == 0 ? "" : <p>$ {totalPedido}</p>}
        </Row>
        <Row className='mt-3'>
          <Col><Button className='' variant='secondary' onClick={limpiarCarrito} title='Limpiar Todo'>Limpiar</Button></Col>
          <Col>
            <Button onClick={handleSave}>Finalizar Pedido</Button>
          </Col>
        </Row>

        {cart.length > 0 && (
          <>
            <Row className='mt-3'>
              <Col>
                <DropdownButton id="dropdown-tipo-envio" title={tipoEnvio ? `Tipo de Envío: ${tipoEnvio}` : "Seleccione Tipo de Envío"}>
                  <Dropdown.Item onClick={() => handleTipoEnvioSelect(TipoEnvio.TAKE_AWAY)}>Take Away</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleTipoEnvioSelect(TipoEnvio.DELIVERY)}>Delivery</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col>
                <DropdownButton id="dropdown-forma-pago" title={formaPago ? `Forma de Pago: ${formaPago}` : "Seleccione Forma de Pago"}>
                  <Dropdown.Item onClick={() => handleFormaPagoSelect(FormaPago.MERCADO_PAGO)}>Mercado Pago</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFormaPagoSelect(FormaPago.EFECTIVO)} disabled={tipoEnvio === TipoEnvio.DELIVERY}>Efectivo</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </>
        )}

        {idPreference && <CheckoutMP idPreference={idPreference}></CheckoutMP>}

      </Container>
    </>
  );
}
