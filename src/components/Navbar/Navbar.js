import React, { useState, useEffect } from "react";
import "./Navbar.css";

//Menus
import MovilNav from "./MovilNav/MovilNav";
import WebNav from "./WebNav/WebNav";

export default function Navbar() {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  const mobile = widthWindow < 700;
  console.log("mobile", mobile);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthWindow(window.innerWidth);
    });
  });
  return (
    <header className="navigation">
      <div className="logo">
        <a href="/">Minerva</a>
      </div>
      {/*Condicional para responsive, según el ancho de la pantalla se redenriza un elemento  */}
      {mobile ? <MovilNav /> : <WebNav />}
    </header>
  );
}
