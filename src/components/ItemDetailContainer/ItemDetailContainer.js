import React, { useState, useEffect } from "react";

//Load
import Loader from "react-loader-spinner";

import { useParams } from "react-router-dom";

//Component
import ItemDetail from "../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

let load = true;

const data = [
  {
    id: 1,
    autor: "Frank Herbert",
    title: "Dune",
    price: 20000,
    imageUrl: "https://www.andeslibreria.com/54469/85508.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum temporibus, accusantium voluptas iste nostrum est earum quae dignissimos inventore quas! Neque impedit dolore eius asperiores aliquid! Doloribus in itaque ipsam.",
  },
  {
    id: 2,
    title: "Un mundo feliz",
    price: 14000,
    imageUrl:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/c1/8c/c18cdeb80fa6f9a212a1cc5639e94c6d.jpg",
    autor: "Aldous Huxley",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum temporibus, accusantium voluptas iste nostrum est earum quae dignissimos inventore quas! Neque impedit dolore eius asperiores aliquid! Doloribus in itaque ipsam.",
  },
  {
    id: 3,
    title: "Viaje al centro de la tierra",
    price: 60000,
    imageUrl:
      "https://i1.wp.com/cangrejoeditores.com//wp-content/uploads/2014/10/jl_viaje_centro_tierra.jpg?fit=482%2C664&ssl=1",
    autor: "Julio Verne",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum temporibus, accusantium voluptas iste nostrum est earum quae dignissimos inventore quas! Neque impedit dolore eius asperiores aliquid! Doloribus in itaque ipsam.",
  },
  {
    id: 4,
    title: "Envueltos en plástico",
    price: 20000,
    imageUrl:
      "https://img.wattpad.com/c45ed5d864f3bc63057e0a36ba9d40f869ed0bc5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f674f697836372d47735255455f513d3d2d3239373334393437312e313436613330653562643835336531363433303232373437393736342e706e67?s=fit&w=720&h=720",
    autor: "Anónimo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum temporibus, accusantium voluptas iste nostrum est earum quae dignissimos inventore quas! Neque impedit dolore eius asperiores aliquid! Doloribus in itaque ipsam.",
  },
];

const getItems = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        data.find((e) => e.id === parseInt(id)),
        load = false
      );
    }, 2000);
  });
};

export default function ItemDetailContainer() {
  const [itemData, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getItems(itemId).then((data) => {
      setItem(data);
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
