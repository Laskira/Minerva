import React, { useState } from "react";

//Declaración de context
export const CartContext = React.createContext({});

export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  const manageSizeCart = () => {
    return cart.reduce((acumulador, currentValue) => {
      return acumulador + currentValue.cant;
    }, 0);
  };

  const cartPrice = () => {
    return cart.reduce((acumulador, currentValue) => {
      return acumulador + currentValue.cant * currentValue.price;
    }, 0);
  };

  const addBookToCart = (newBook, quantity) => {
    let bookIndex = cart.findIndex((item) => item.id === newBook.id);

    if (bookIndex === -1) {
      setCart((cart) => [...cart, { book: newBook, cant: quantity }]);
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
        manageSizeCart,
        cartPrice,
        addBookToCart,
        removeBookCart,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
