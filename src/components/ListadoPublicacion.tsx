import { useEffect, useState } from 'react';
import PublicacionInstrumento from './PublicacionInstrumento';
import { Container, Row, Col } from 'react-bootstrap';
import { Carrito } from './carrito/Carrito';
import ArticuloManufacturado from '../entities/ArticuloManufacturado';
import { getAllArticuloManufacturado } from '../services/ApiArticulos';

function ListadoPublicacion() {
  const [articulos, setArticulos] = useState<ArticuloManufacturado[]>([])
  const getArticulos = async () => {
    const articulos: ArticuloManufacturado[] = await getAllArticuloManufacturado();
    setArticulos(articulos);
  }

  useEffect(() => {
    getArticulos();
  }, []);
  return (
    <>
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
  )
}

export default ListadoPublicacion