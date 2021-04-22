import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";

//Material
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

//Context
import { CartContext } from "../../context/CartContext";
//Firebase
import firebase from "firebase/app";
import "firebase/firestore";

//Firestone
import { getFirestore } from "../../firebase/client";

import { Link } from "react-router-dom";

export default function Cart() {
  //Información de comprador
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [idOrden, setIdOrden] = useState(null);

  const { cart, clearCart, removeBookCart, sumaItems, precio } = useContext(
    CartContext
  );

  const generateOrden = (e) => {
    e.preventDefault();
    const database = getFirestore();

    const ordersColletion = database.collection("orders");
    let orden = {};

    //Fecha en que se crea la orden
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.total = precio;
    //Datos del cliente
    orden.buyer = { name, phone, email };
    //Productos almacenados
    orden.items = cart.map((cartItem) => {
      // return { id: cartItem.id, title: cartItem.title, price: cartItem.price };
      const id = cartItem.item.id;
      const title = cartItem.item.title;
      const price = cartItem.item.price * cartItem.quantity;

      return { id, title, price };
    });

    ordersColletion
      .add(orden)
      .then((doc) => {
        setIdOrden(doc.id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Compra terminada");
      });

    const itemsCollection = database.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((e) => e.item.id)
    );

    console.log(itemsCollection);

    const batch = database.batch();

    itemsCollection.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cart.find((item) => item.item.id === docSnapshot.id).cant,
        });
      });

      batch.commit().then((res) => {
        console.log("Batch:", res);
      });
    });
  };

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
        <>
          <h2 className="empty">Carrito de compras</h2>
          <div className="cart-container">
            <div>
              {cart.map((cartItem) => (
                <div key={cartItem.item.id} className="book-selected">
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
            </div>

            <div className="factura">
              <div>
                {idOrden ? (
                  <div>
                    <h2>Factura generada:</h2>
                    <p>{idOrden}</p>
                  </div>
                ) : (
                  <h2> Libros seleccionados</h2>
                )}

                <div className="factura-separador"></div>
                <h4 className="factura-text">Cantidad total: {sumaItems}</h4>
                <h4 className="factura-text">Precio total: {precio}</h4>
              </div>

              <h3>Rellena el formulario para confirmar tu compra</h3>

              <form onSubmit={generateOrden}>
                <input
                  className="client-input"
                  placeholder="Nombre completo"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="client-input"
                  placeholder="Correo"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="client-input"
                  placeholder="Télefono"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!name | !email | !phone}
                >
                  Generar orden
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={clearCart}
                >
                  <DeleteOutlineIcon />
                  Vaciar carrito
                </Button>
              </form>

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
