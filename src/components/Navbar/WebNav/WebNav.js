import React from "react";
import "./WebNav.css";

function WebNav() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="/">Libros</a>
        </li>
        <li>
          <a href="/">Ebooks</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default WebNav;