import React from "react";

import "./Salute.css";

function Salute({ salute }) {
  return (
    <div className="salute-container">
      
      <div className="salute-content">
        <h1 className="salute">{salute}</h1>
        <h2 className="salute-text">
          En Minerva creemos que cada obra es una aventura
        </h2>
        <p className="salute-text">¡Elegí una nueva!</p>
      
      </div>
    </div>
  );
}

export default Salute;
