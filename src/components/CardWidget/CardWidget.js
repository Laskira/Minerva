import React from "react";
import "./CardWidget.css";

//Material Component
import Button from '@material-ui/core/Button';

//Icon carrito de compras vacio
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CardWidget() {
  return (
    <Button className="cart">
      <ShoppingCartIcon style={{ color: 'white'}} />
    </Button>
  );
}
