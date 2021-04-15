import React, { useState, useEffect } from "react";

//Declaración de context
export const CartContext = React.createContext([]);

export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);
  const [sumaItems, setSumaItems] = useState(0);
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    let precioTotal = cart.reduce((accumulador, ItemValue) => {
      const value = ItemValue.cant * ItemValue.item.price;
      return accumulador + value;
    }, 0);

    let total = cart.reduce((accumulador, ItemValue) => {
      return accumulador + ItemValue.cant;
    }, 0);

    setSumaItems(total);
    setPrecio(precioTotal);
  }, [cart]);

  const addBookToCart = (newBook, quantity) => {
    let bookIndex = cart.findIndex((item) => item.id === newBook.id);

    if (bookIndex === -1) {
      setCart((cart) => [...cart, { item: newBook, cant: quantity }]);
    } else {
      let modifiedCart = [...cart];
      modifiedCart[bookIndex].cant += quantity;
      setCart(modifiedCart);
    }
  };

  const removeBookCart = (bookId) => {
    const newCart = cart.filter((e) => e.item.id !== bookId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const currentItem = cart.find((e) => e.item.id === id);

    return currentItem ? true : false;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addBookToCart,
        removeBookCart,
        clearCart,
        isInCart,
        sumaItems,
        precio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
