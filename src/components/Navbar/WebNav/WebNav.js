import React from "react";
import "./WebNav.css";

import CardWidget from "../../CardWidget/CardWidget";

// import {Link} from 'react-router-dom';

function WebNav() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="/" className="text-white">Libros</a>
        </li>
        <li>
          <a href="/">Ebooks</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
        <CardWidget/>
      </ul>
    </nav>
  );
}

export default WebNav;
