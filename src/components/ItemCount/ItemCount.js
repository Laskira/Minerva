import React, { useState, useEffect } from "react";
import "./ItemCount.css";

//Material Component
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//Icons
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function ItemCount({ initial, stock, onAdd }) {
  //Contador
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const add = () => setCount(count + 1);

  const remove = () => {
    if (count <= 0) {
      return count;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-container">
      {/* <h3>Count Component</h3> */}
      <div>
        <p>Libros seleccionados: {count}</p>
        <ButtonGroup disableElevation variant="outlined">
          <Button onClick={remove}>
            <RemoveIcon />
          </Button>
          <Button onClick={add} disabled={count === stock}>
            <AddIcon />
          </Button>
        </ButtonGroup>
      </div>

      <Button type="button" variant="outlined" onClick={() => onAdd(count)} className="cart-button">
        Añadir al carrito <ShoppingCartIcon />
      </Button>
    </div>
  );
}
