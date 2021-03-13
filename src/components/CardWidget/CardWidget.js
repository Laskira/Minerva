import React from "react";
import "./CardWidget.css";

//Img Import
import shoppingCart from "../../assets/shopping-cart.svg"; //Carrito vacio
//import addDhoppingCart from '../../assets/add-shopping-cart.svg'; Carrito para cuando el array tenga siquiera un elemento

export default function CardWidget() {
  return (
    <button className="cart">
      <img src={shoppingCart} alt="Carrito"/>
    </button>
  );
}
