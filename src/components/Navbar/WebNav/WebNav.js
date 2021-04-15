import React from "react";
import "./WebNav.css";

//Shoping cart
import CardWidget from "../../CardWidget/CardWidget";
import { Link } from "react-router-dom";

function WebNav() {
   
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to={`/category/libros`} className="text-white">
            Libros
          </Link>
        </li>
        <li>
          <Link to="/category/ebooks">Ebooks</Link>
        </li>
        <li>
          {/* This component is on develoment */}
          <Link to="/404">Contacto</Link>
        </li>
        <CardWidget/>
      </ul>
    </nav>
  );
}

export default WebNav;
