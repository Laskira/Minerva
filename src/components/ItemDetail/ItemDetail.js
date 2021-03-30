import React from "react";

import "./ItemDetail.css";

//Materilize
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export default function ItemDetail({ item }) {
  return (
    <div className="card">
      <div className="card-text">
        <div className="portada">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="title-total">
          <div className="title">Precio: {item.price} $</div>
          <h2>{item.title}</h2> {item.autor}
          <div className="desc">{item.description}</div>
          <div className="actions">
            <button className="action-button">
              <AddShoppingCartIcon fontSize="large" />
            </button>
            <button className="action-button">
              <ThumbUpIcon fontSize="large" />
            </button>
            <button className="action-button">
              <ThumbDownIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
