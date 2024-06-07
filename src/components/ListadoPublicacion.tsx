// src/components/ListadoPublicacion.tsx
import React, { useEffect, useState } from 'react';
import PublicacionInstrumento from './PublicacionInstrumento';
import { BsHouse } from "react-icons/bs";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Carrito } from './carrito/Carrito';
import ArticuloManufacturado from '../entities/ArticuloManufacturado';
import { getAllArticuloManufacturado } from '../services/ApiArticulos';
import { useNavigate } from 'react-router-dom';

function ListadoPublicacion() {
  const [articulos, setArticulos] = useState<ArticuloManufacturado[]>([]);
  const navigate = useNavigate();

  const getArticulos = async () => {
    const articulos: ArticuloManufacturado[] = await getAllArticuloManufacturado();
    setArticulos(articulos);
  };

  useEffect(() => {
    getArticulos();
  }, []);

  const handleHomeClick = () => {
    navigate('/grilla');
  };

  return (
    <>
      <Button onClick={handleHomeClick}>
        <BsHouse title="Home" size={30} />
      </Button>
      <Container fluid>
        <Row>
          <Col sm={8}>
            <div className="instrumento-list">
              {articulos.map(articulo => (
                <PublicacionInstrumento key={articulo.id} articulo={articulo} />
              ))}
            </div>
          </Col>
          <Col sm={4}>
            <Carrito />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ListadoPublicacion;
