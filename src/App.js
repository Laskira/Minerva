import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Salute from "./components/Salute/Salute";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";

//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Context
import CartProvider from "./context/CartContext";

export default function App() {
  const [salute, setSalute] = useState("");

  useEffect(() => {
    const today = new Date();

    if (today.getHours() >= 6 && today.getHours() <= 11) {
      setSalute("¡Buenos días!");
    }

    if (today.getHours() >= 12 && today.getHours() <= 18) {
      setSalute("¡Buenas tardes!");
    }

    if (today.getHours() >= 19 && today.getHours() <= 23) {
      setSalute("¡Buenas noches!");
    }

    if (today.getHours() >= 0 && today.getHours() <= 5) {
      setSalute("¡Buenas noches!");
    }
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Salute salute={salute} />
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>

            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/catalogo">
            <ItemListContainer />
            </Route>

            {/* 404 */}
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
   </CartProvider> 
  );
}
