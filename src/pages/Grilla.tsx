// src/components/Home.tsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/Grilla.css';
import { useNavigate } from 'react-router-dom';
import { BsPlusSquare } from 'react-icons/bs';
import { getPedidos } from '../services/PedidoService';


function Grilla() {
  const [pedidos, setPedidos] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleProductosClick = () => {
    navigate('/productos');
  };

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await getPedidos();
        setPedidos(res);
      } catch (error) {
        console.error("Error al obtener los pedidos", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <>
      <Button onClick={handleProductosClick} style={{ marginBottom: '20px' }}>
        <BsPlusSquare title="Home" size={30} />
      </Button>
      <Container fluid className="grid-container">
        <Row className="grid-header">
          <Col className="grid-item">Id</Col>
          <Col className="grid-item">Estado</Col>
          <Col className="grid-item">Tipo de Envío</Col>
          <Col className="grid-item">Forma de Pago</Col>
          <Col className="grid-item">Sucursal</Col>
          <Col className="grid-item">Cliente</Col>
          <Col className="grid-item">Empleado</Col>
        </Row>
        {pedidos.map((pedido, index) => (
          <Row key={index} className="grid-row">
            <Col className="grid-item">{pedido.id}</Col>
            <Col className="grid-item">{pedido.estado}</Col>
            <Col className="grid-item">{pedido.tipoEnvio}</Col>
            <Col className="grid-item">{pedido.formaPago}</Col>
            <Col className="grid-item">{pedido.sucursal.nombre}</Col>
            <Col className="grid-item">{pedido.cliente.nombre +" "+ pedido.cliente.apellido}</Col>
            <Col className="grid-item">{pedido.empleado.nombre +" "+ pedido.empleado.apellido}</Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Grilla;
