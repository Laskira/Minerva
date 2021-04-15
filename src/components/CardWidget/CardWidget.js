import React, { useContext } from "react";
import "./CardWidget.css";

import { Link } from "react-router-dom";


//Material Component
import Button from "@material-ui/core/Button";

//Icon carrito de compras
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//context
import { CartContext } from "../../context/CartContext";

export default function CardWidget() {
  const { sumaItems } = useContext(CartContext);
  
  return (
   <>
   {sumaItems ?   <Link to="/cart">
    <Button className="cart">
      <AddShoppingCartIcon style={{ color: "white" }} />
      <p className="counter">
        {sumaItems}
        </p>
    </Button></Link>  : null}
   </>
  );
}
