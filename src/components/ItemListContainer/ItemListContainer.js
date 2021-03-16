import React from "react";
import "./ItemListContainer.css";

import ItemCount from "../ItemCount/ItemCount";
export default function ItemListContainer({ salute }) {

  const initial = 0;
  const stock = 10;
  
  return (
    <div className="list-container">
      <h1 className="salute">
          {salute}
          </h1>
      <h3 className="text">
          En Minerva creemos que cada obra es una aventura
      </h3>
      <p className="text">
          ¡Elegí una nueva!
        </p>
      <ItemCount initial={initial} stock={stock}/>
    </div>
  );
}
