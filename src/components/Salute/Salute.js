import React from "react";

import './Salute.css';

function Salute({ salute }) {
  return (
    <div className="salute-container">
      <h1 className="salute">{salute}</h1>

      <h3 className="text">En Minerva creemos que cada obra es una aventura</h3>

      <p className="text">¡Elegí una nueva!</p>
    </div>
  );
}

export default Salute;
