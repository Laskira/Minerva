import React, { useState, useEffect } from "react";

import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Dune",
        price: "20.000",
        imageUrl: "https://www.andeslibreria.com/54469/85508.jpg",
        description:
          "Arrakis: un planeta desértico donde el agua es el bien más preciado y, donde llorar a los muertos es el símbolo de máxima prodigalidad. Paul Atreides: un adolescente marcado por un destino singular, dotado de extraños poderes y, abocado a convertirse en dictador, mesías y mártir.",
        autor: "Frank Herbert",
      })
    }, 2000)
  })
}

function ItemDetailContainer() {

  const [item, setItem] = useState([])
  useEffect(() => {
    getItems().then((res) => setItem(res))
    return;
  }, [])

  return (
   <div className="detail-container">
      <ItemDetail item={item} />      
   </div>
  );
}

export default ItemDetailContainer;
