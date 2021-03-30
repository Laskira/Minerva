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
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Dune",
            price: "20.000",
            imageUrl: "https://www.andeslibreria.com/54469/85508.jpg",
            autor: "Frank Herbert",
            book: true,
            stock: 2,
            ebook: true,
          },
          {
            id: 2,
            title: "Un mundo feliz",
            price: "14.000",
            imageUrl:
              "https://images.cdn1.buscalibre.com/fit-in/360x360/c1/8c/c18cdeb80fa6f9a212a1cc5639e94c6d.jpg",
            autor: "Aldous Huxley",
            book: true,
            stock: 1,
            ebook: false,
          },
          {
            id: 3,
            title: "Viaje al centro de la tierra",
            price: "60.000",
            imageUrl:
              "https://i1.wp.com/cangrejoeditores.com//wp-content/uploads/2014/10/jl_viaje_centro_tierra.jpg?fit=482%2C664&ssl=1",
            autor: "Julio Verne",
            book: true,
            stock: 5,
            ebook: true,
          },
          {
            id: 4,
            title: "Envueltos en plástico",
            price: "20.000",
            imageUrl:
              "https://img.wattpad.com/c45ed5d864f3bc63057e0a36ba9d40f869ed0bc5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f674f697836372d47735255455f513d3d2d3239373334393437312e313436613330653562643835336531363433303232373437393736342e706e67?s=fit&w=720&h=720",
            autor: "Anónimo",
            book: false,
            ebook: true,
          },
        ]);
        setLoad(false);
      }, 2000);
    });

    data.then((result) => {
      setItems(result);

      if (categoryId === "libros") {
        let bookFilter = result.filter((res) => {
          return res.book;
        });
        result = bookFilter;
        setItems(result);
      }

      if (categoryId === "ebooks") {
        let ebookFilter = result.filter((res) => {
          return res.ebook;
        });
        result = ebookFilter;
        setItems(result);
      }
    });
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
