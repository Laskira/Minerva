import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

export default function Error() {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
        </div>
        <h2>¡Uy! Te has perdido</h2>
        <p>
          La página que estás buscando ha cambiado de nombre o se haya
          temporalmente fuera de servicio.
        </p>
        <Link to="/">Regresar</Link>
      </div>
    </div>
  );
}
