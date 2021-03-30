/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MovilNav.css";

import CardWidget from "../../CardWidget/CardWidget";

 import {Link} from 'react-router-dom';

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
          <Link  to={`/category/libros`}>
            <span>Libros</span>
          </Link>
        </li>
        <li>
          <Link to="/category/ebooks">
            <span>Ebooks</span>
          </Link>
        </li>
        <li>
          {/* This component is on develoment */}
          <Link to="/404">
            <span>Contacto</span>
          </Link>
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
