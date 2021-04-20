import React, { useState, useEffect } from "react";

//Load
import Loader from "react-loader-spinner";

//Component
import ItemDetail from "../ItemDetail/ItemDetail";

//Firestone
import { getFirestore } from "../../firebase/client";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";

let load = true;

const getItems = (id) => {
  const database = getFirestore();
  const itemsCollection = database.collection("items");

  const item = itemsCollection.doc(id);
  return item.get();
};

export default function ItemDetailContainer() {
  const [itemData, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      load = false;
    }, 3000);

    getItems(itemId).then((res) => {
      if (res.exists) {
        setItem(res.data());
      }
    });
    load = false;
    return;
  }, [itemId]);

  return (
    <div className="detail-container">
      <h2 className="detail-title">
        {!itemId
          ? `Nuestra oferta del mes`
          : `${itemData.title} una aventura de tu talla`}
      </h2>

      {!load ? (
        //Página principal
        <ItemDetail item={itemData} />
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
