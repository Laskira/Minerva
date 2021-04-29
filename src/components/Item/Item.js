import React from "react";

import { Link } from "react-router-dom";

//Materialize component
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import "./Item.css";

export default function Item({ item }) {
  const stock = () => {
    if (item.stock > 0) {
      return <p>Disponibles {item.stock}</p>;
    } else {
      return <p>Agotado</p>;
    }
  };

  return (
    <div className="card-container">
      <div className="portada">
        <img src={item.imageUrl} alt={item.title} />
      </div>

      <div className="description-container">
        <h3 className="bookName">{item.title}</h3>
        <p className="autor">{item.autor}</p>
        <p className="price">$ {item.price} </p>
        {stock()}
        <div className="cart-button">
          <Link to={`/item/${item.id}`}>
            {item.stock > 0 ? (
              <Button
                variant="contained"
                endIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}
              >
                Comprar
              </Button>
            ) : (
              <Button
                variant="contained"
                endIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}
                disabled
              >
                Comprar
              </Button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
