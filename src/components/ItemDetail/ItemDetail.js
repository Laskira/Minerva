import React, { useState } from "react";

//Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Materialize
import Button from "@material-ui/core/Button";
import "./ItemDetail.css";

//Component
import ItemCount from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";

//Alert Const
const MySwal = withReactContent(Swal);

export default function ItemDetail({ item }) {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(false);

  const addItem = (counter) => {
    setCount(counter);
    console.log(count);
    if (count < 1) {
      setAlert(true);
      if (alert === true) {
        MySwal.fire({
          title: "Uy",
          text: `Todavía no tienes libros en tu carrito`,
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
        setAlert(false);
      }
    } 
    
    if(count => 1){
      console.log(`Comprando ${count}`);
    }
  };

  const confirmarCompra = () => {
    Swal.fire({
      title: "Disfruta tu compra",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
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
            {/* Count componet */}
            {count === 0 ? (
              <ItemCount
                className="action-button"
                initial={initial}
                stock={stock}
                onAdd={addItem}
              ></ItemCount>
            ) : (
              <div className="confirm">
                <Link to="/cart">
                  <Button
                    onClick={confirmarCompra}
                    variant="contained"
                    size="large"
                    className="confirm"
                  >
                    Terminar mi compra
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
