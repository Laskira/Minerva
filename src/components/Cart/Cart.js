import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";

//Material
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

//Alert
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

//Context
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  //Alert Const
  // const MySwal = withReactContent(Swal);

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

  const confirmarCompra = () => {
    Swal.fire({
      title: "Disfruta tu compra",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
        <>
          <h2 className="empty">Carrito de compras</h2>
          <div className="cart-container">
            {cart.map((cartItem) => (
              <div key={cartItem.item} className="book-selected">
                <div>
                  <img
                    src={cartItem.item.imageUrl}
                    alt={cartItem.item.title}
                    className="portada"
                  />
                </div>
                <div>
                  <p>Cantidad: {cartItem.cant} </p>
                  <p>Valor por unidad: {cartItem.item.price}</p>
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
              </div>
            ))}

            <div className="factura">
              <h2>Factura</h2>
              <div class="factura-separador"></div>
              <h4>Cantidad total: {sumaItems}</h4>
              <h4>Total: {precio}</h4>

              <Button variant="contained" color="secondary" onClick={clearCart}>
                <DeleteOutlineIcon />
                Vaciar carrito
              </Button>

              <Button
                variant="contained"
                onClick={() => confirmarCompra()}
              >
                <EmojiEmotionsIcon />
                Comfirmar compra
              </Button>
              <p className="come-back">
                <Link to="/catalogo">
                  <ArrowBackIcon />
                  Volver al catalogo
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
