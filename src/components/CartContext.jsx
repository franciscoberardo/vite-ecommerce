// components/CartContext.js
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === itemId) {
          // Reduce la cantidad solo si es mayor que 1
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe estar dentro de un CartProvider");
  }
  return context;
};
