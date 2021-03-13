import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({salute}) {
    return (
        <div className="list-container">
            <h1 className="salute">
                {salute}
            </h1>
            <h3 className="lema">
                En Minerva creemos que cada obra es una aventura
            </h3>           
           <p className="invitacion">
                ¡Elegí una nueva!
            </p>
        </div>
    )
}

