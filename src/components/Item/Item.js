import React from "react";
import "./Item.css";

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
      </div>
    </div>
  );
}
