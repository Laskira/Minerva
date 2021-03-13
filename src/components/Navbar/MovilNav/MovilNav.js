/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MovilNav.css";

import CardWidget from "../../CardWidget/CardWidget";

//Componente de navbar opcional solo usado si al pantala posee un ancho menor a 7000
export default function MovilNav() {
  return (
    <nav id="navigation">
      <div className="control-menu">
        <a href="#navigation" className="open">
          <span></span>
        </a>
        <a href="#" className="close">
          <span></span>
        </a>
      </div>

      <ul className="nav-items">
        <li>
          <a href="#">
            <span>Libros</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Ebooks</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Contacto</span>
          </a>
        </li>
        <li>  
            <span>
              <CardWidget />
            </span>
        </li>
      </ul>
    </nav>
  );
}
