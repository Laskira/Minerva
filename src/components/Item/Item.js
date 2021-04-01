import React from "react";
import "./Item.css";

import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCartIcon";

export default function Item({ item }) {
  return (
    <div className="card-container">
      <div className="portada">
        <img src={item.imageUrl} alt={item.title} />
      </div>

      <div className="description-container">
        <h3 className="bookName">{item.title}</h3>
        <p className="autor">{item.autor}</p>
        <p className="price">$ {item.price} </p>

        <div className="cart-button">
          <Link to={`/item/${item.title}`}>
          <Button
            variant="contained"
            endIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}
          >
            Comprar
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
