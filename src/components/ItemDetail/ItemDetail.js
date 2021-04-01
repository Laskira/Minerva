import React, { useState } from "react";

//Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./ItemDetail.css";

//Component
import ItemCount from "../ItemCount/ItemCount";

// import { Link } from "react-router-dom";

//Materilize
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import ThumbDownIcon from "@material-ui/icons/ThumbDown";

//Alert Const
const MySwal = withReactContent(Swal);

export default function ItemDetail({ item }) {
  const [count, setCount] = useState(0);

  const addItem = (counter) => {
    setCount(counter);
  };

  const confirmarCompra = (count) => {
    if (count === 0) {
      MySwal.fire({
        title: "Uy",
        text: `Todavía no tienes libros en tu carrito`,
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      MySwal.fire({
        title: "Comprar",
        text: `¿Estas seguro de que vas comprar ${count} libros?`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#00838f",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, comprar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Disfruta tu compra",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }else{
          //Se inicializa contador ya que la compra no feu realizada
          setCount(0);
        }
      });
    }
  };


  //const stock
  const initial = 1;
  const stock = 5;

  return (
    <div className="card">
      <div className="card-text">
        <div className="portada">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="title-total">
          <div className="title">Precio: {item.price}$</div>
          <h2>{item.title}</h2> {item.autor}
          <div className="desc">{item.description}</div>
          <div className="actions">
            {/* <button className="action-button">
              <AddShoppingCartIcon fontSize="large" />
            </button>
            <button className="action-button">
              <ThumbUpIcon fontSize="large" />
            </button>
            <button className="action-button">
              <ThumbDownIcon fontSize="large" />
            </button> */}
            {/* Count componet */}
            {count === 0 ? (
              <ItemCount
                className="action-button"
                initial={initial}
                stock={stock}
                onAdd={addItem}
              ></ItemCount>
            ) : (
              <button onClick={confirmarCompra}>Terminar mi compra</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
