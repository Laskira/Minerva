import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

//Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Load
import Loader from "react-loader-spinner";

//Components
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

//Router
import { useParams } from "react-router-dom";

//Firestone
import { getFirestore } from "../../firebase/client.js";

//Alert Const
const MySwal = withReactContent(Swal);

export const onAdd = (count) => {
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
      }
    });
  }
};

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

  //const stock
  const initial = 1;
  const stock = 5;

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

          <div>
            <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
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
