import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

//Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Components
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

//Alert
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

export default function ItemListContainer({ salute }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Dune",
            price: "20.000",
            imageUrl: "https://www.andeslibreria.com/54469/85508.jpg",
            description:
              "Arrakis: un planeta desértico donde el agua es el bien más preciado y, donde llorar a los muertos es el símbolo de máxima prodigalidad. Paul Atreides: un adolescente marcado por un destino singular, dotado de extraños poderes y, abocado a convertirse en dictador, mesías y mártir.",
            autor: "Frank Herbert"
          },
          {
            id: 2,
            title: "Un mundo feliz",
            price: "14.000",
            imageUrl:
              "https://images.cdn1.buscalibre.com/fit-in/360x360/c1/8c/c18cdeb80fa6f9a212a1cc5639e94c6d.jpg",
            description: "",
            autor: "Aldous Huxley"
          },
          {
            id: 3,
            title: "Viaje al centro de la tierra",
            price: "60.000",
            imageUrl:
              "https://i1.wp.com/cangrejoeditores.com//wp-content/uploads/2014/10/jl_viaje_centro_tierra.jpg?fit=482%2C664&ssl=1",
            description: "",
            autor: "Julio Verne"
          },
          {
            id: 4,
            title: "Envueltos en plástico",
            price: "20.000",
            imageUrl: 'https://img.wattpad.com/c45ed5d864f3bc63057e0a36ba9d40f869ed0bc5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f674f697836372d47735255455f513d3d2d3239373334393437312e313436613330653562643835336531363433303232373437393736342e706e67?s=fit&w=720&h=720',
            description: "",
            autor: "Anónimo",
          }
        ]);
      }, 2000);
    });
    data.then((result) => {
      setItems(result);
    });
  });

  //const stock
  const initial = 1;
  const stock = 5;
  return (
    <div className="list-container">
      <div>
        <h1 className="salute">{salute}</h1>

        <h3 className="text">
          En Minerva creemos que cada obra es una aventura
        </h3>

        <p className="text">¡Elegí una nueva!</p>
      </div>

      <div className="catalogo">
        <h2>Nuestros productos</h2>
        <ItemList items={items} />
      </div>
      <div>
        <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
      </div>
    </div>
  );
}
