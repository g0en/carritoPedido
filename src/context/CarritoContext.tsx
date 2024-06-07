import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { DetallePedido } from '../types/DetallePedido';
import ArticuloManufacturado from '../types/ArticuloManufacturado';
import ArticuloInsumo from '../types/ArticuloInsumo';

interface CartContextType {
  cart: DetallePedido[];
  addCarrito: (product: ArticuloManufacturado | ArticuloInsumo) => void;
  removeCarrito: (product: ArticuloManufacturado | ArticuloInsumo) => void;
  removeItemCarrito: (product: ArticuloManufacturado | ArticuloInsumo) => void;
  limpiarCarrito: () => void;
  totalPedido: number;
}

// Crear el contexto
export const CartContext = createContext<CartContextType>({
  cart: [],
  addCarrito: () => { },
  removeCarrito: () => { },
  removeItemCarrito: () => { },
  limpiarCarrito: () => { },
  totalPedido: 0
});

// Proveedor del contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<DetallePedido[]>([]);
  const [totalPedido, setTotalPedido] = useState<number>(0);

  useEffect(() => {
    calcularTotalCarrito();
  }, [cart]);

  const addCarrito = (product: ArticuloManufacturado | ArticuloInsumo) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.articulo.id === product.id);
      if (itemIndex === -1) {
        // Si el producto no está en el carrito, lo agregamos con cantidad 1
        const newDetalle: DetallePedido = {
          id: null,
          eliminado: false,
          cantidad: 1,
          subTotal: 0,
          articulo: product,
        };
        return [...prevCart, newDetalle];
      } else {
        // Si el producto ya está en el carrito, incrementamos su cantidad
        const newCart = [...prevCart];
        newCart[itemIndex].cantidad += 1;
        console.log(newCart);
        return newCart;
      }
    });
  };

  const removeCarrito = (product: ArticuloManufacturado | ArticuloInsumo) => {
    setCart(prevCart => prevCart.filter(detalle => detalle.articulo.id !== product.id));
  };

  const removeItemCarrito = (product: ArticuloManufacturado | ArticuloInsumo) => {
    setCart(prevCart => {
      const newCart = prevCart.map(detalle => {
        if (detalle.articulo.id === product.id) {
          if (detalle.cantidad > 1) {
            return { ...detalle, cantidad: detalle.cantidad - 1 };
          }
          return null;
        }
        return detalle;
      }).filter(detalle => detalle !== null) as DetallePedido[];
      return newCart;
    });
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  const calcularTotalCarrito = () => {
    const total = cart.reduce((acc, item) => acc + Number(item.articulo.precioVenta) * Number(item.cantidad), 0);
    setTotalPedido(total);
  };

  return (
    <CartContext.Provider value={{ cart, addCarrito, removeCarrito, removeItemCarrito, limpiarCarrito, totalPedido }}>
      {children}
    </CartContext.Provider>
  );
};
