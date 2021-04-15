import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";

//Material
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

//Context
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart, removeBookCart, sumaItems, precio } = useContext(
    CartContext
  );

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [cart]);

  return (
    <div>
      {!visible ? (
        <>
          <h1 className="empty">Hey, aún no tienes tu carrito vacío</h1>
          <div className="empty">
            <Link to="/">
              <Button variant="outlined" className="empty">
                <ArrowBackIcon />
                Regresa al inicio
              </Button>
            </Link>
            <Link to="/catalogo">
              <Button variant="outlined" className="empty">
                Ir al catalogo
                <MenuBookIcon />
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div>
          <h2 className="empty">Total de libros seleccionados</h2>
          {cart.map((cartItem) => (
            <div key={cartItem.item}>
              <img
                src={cartItem.item.imageUrl}
                alt={cartItem.item.title}
                className="portada"
              />
              <p>Cantidad: {cartItem.cant} </p>
              <p>
                Valor por unidad:
                {cartItem.item.price}
              </p>
              <div className="empty">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeBookCart(cartItem.item.id)}
                >
                  borrar
                </Button>
              </div>
            </div>
          ))}

          <div className="empty">
            <h4>Cantidad total: {sumaItems}</h4>
            <h4>Valor total: {precio}</h4>
            <Button variant="contained" color="secondary" onClick={clearCart}>
              <DeleteOutlineIcon />
              Vaciar carrito
            </Button>
            <Link to="/catalogo">
              <Button variant="contained">
                <ArrowBackIcon />
                Volver al catalogo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
