import React from "react";
import "./ItemList.css";

import Item from "../Item/Item";

export default function ItemList({ items = [] }) {
  return (
    <div className="list-group">
      {items.map((item) => (
        <Item item={item} key={item.id} className="item-container" />
      ))}
    </div>
  );
}
