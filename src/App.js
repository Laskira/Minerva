import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer salute={salute} />
          </Route>

          <Route path="/item">
          <h2 className="detail-title">Nuestra oferta del mes</h2>
            <ItemDetailContainer />
          </Route>

          {/* 404 */}
          <Route path="*">404</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
