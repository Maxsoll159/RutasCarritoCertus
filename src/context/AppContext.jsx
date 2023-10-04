import { createContext, useState } from "react";

export const ContextProduct = createContext();

export const AppContext = ({ children }) => {
  const [cardProduct, setCardProduct] = useState([]);
  const agregarProducto = (product) => {
    const productoExistente = cardProduct.find((prod) => prod.title === product.title);
    if (productoExistente) {
      productoExistente.cantidad = (productoExistente.cantidad || 0) + 1;
      setCardProduct([...cardProduct]);
    } else {
      setCardProduct([...cardProduct, { ...product, cantidad: 1 }]);
    }
    alert("Producto Agregado")
  };


  return (
    <ContextProduct.Provider value={{ cardProduct, agregarProducto }}>
      {children}
    </ContextProduct.Provider>
  );
};
