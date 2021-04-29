import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

//Load
import Loader from "react-loader-spinner";

//Components
import ItemList from "../ItemList/ItemList";

//Router
import { useParams } from "react-router-dom";

//Firestone
import { getFirestore } from "../../firebase/client.js";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  //Variable de carga
  const [load, setLoad] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const database = getFirestore();
    const itemsCollection = database.collection("items");

    //Loader
    setTimeout(() => {
      setLoad(false);
    }, 1500);

    if (categoryId === "libros") {
      const bookFilter = itemsCollection.where("book", "==", true);
      const book = bookFilter.get();

      book.then((snaptshot) => {
        if (snaptshot.size > 0) {
          setItems(
            snaptshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      });
    } else if (categoryId === "ebooks") {
      const ebookFilter = itemsCollection.where("ebook", "==", true);
      const ebook = ebookFilter.get();

      ebook.then((snaptshot) => {
        if (snaptshot.size > 0) {
          setItems(
            snaptshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      });
    } else {
      const prom = itemsCollection.get();
      prom.then((snaptshot) => {
        if (snaptshot.size > 0) {
          setItems(
            snaptshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      });
    }
  });
  return (
    <div className="list-container">
      <div className="catalogo">
        <h2>Nuestros {!categoryId ? `productos` : categoryId}</h2>
      </div>
      {!load ? (
        //Página principal
        <div>
          <div className="catalogo">
            <ItemList items={items} />
          </div>
         
        </div>
      ) : (
        //Loading
        <div className="load">
          <Loader type="TailSpin" height={250} width={250} color="#E6F4F1" />
          <p>Espera un segundo</p>
        </div>
      )}
    </div>
  );
}
