import React, { useState, useEffect } from "react";
import "./ItemCount.css";

//Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Material Component
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//Icons
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function ItemCount({ initial, stock }) {
  //Contador
  const [count, setCount] = useState(initial);

  //Alert
  const MySwal = withReactContent(Swal);

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

  const onAdd = () => {
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
  return (
    <div className="centerE">
      <h3>Count Component</h3>
      <ButtonGroup disableElevation variant="outlined">
        <Button onClick={remove}>
          <RemoveIcon />
        </Button>
        <Button onClick={add} disabled={count === stock}>
          <AddIcon />
        </Button>
      </ButtonGroup>

      <p>Libros seleccionados: {count}</p>
      <Button type="button" variant="outlined" onClick={onAdd}>
        Añadir al carrito <ShoppingCartIcon />
      </Button>
    </div>
  );
}
