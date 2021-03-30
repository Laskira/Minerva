import React, { useState, useEffect } from "react";

//Load
import Loader from "react-loader-spinner";

import { useParams } from "react-router-dom";

//Component
import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

let load = true;

const getItems = (id, des) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        autor: "Frank Herbert",
        title: id.title,
        price: "20.000",
        imageUrl:"https://www.andeslibreria.com/54469/85508.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum temporibus, accusantium voluptas iste nostrum est earum quae dignissimos inventore quas! Neque impedit dolore eius asperiores aliquid! Doloribus in itaque ipsam."
      
      });
      load = false;
    }, 2000);
  });
};

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();


  useEffect(() => {
    getItems(itemId).then((res) => setItem(res));
    load = false;
    return;
  }, [itemId]);

  return (
    <div className="detail-container">
      <h2 className="detail-title">
        {!itemId
          ? `Nuestra oferta del mes`
          : `${itemId} una aventura de tu talla`}
      </h2>

      {!load ? (
        //Página principal
        <ItemDetail item={item} />
      ) : (
        //Loading
        <div className="load">
          <Loader type="TailSpin" height={300} width={300} color="#E6F4F1" />
          <p>Espera un segundo</p>
        </div>
      )}
    </div>
  );
}

