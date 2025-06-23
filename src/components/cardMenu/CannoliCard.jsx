import React from "react";
import "./CannoliCard.css";


function CannoliCard
({ image, imageAlt, description, formattedPrice }) {

    return (
        <div className="cannoli-card">
            <img className="cannoli-card__image" src={ image } alt={imageAlt}/>
            <p className="cannoli-card__description">{ description }</p>
            <p className="cannoli-card__price">{ formattedPrice }</p>
            <p className="cannoli-card__buttonlist">Assortiment</p>
        </div>
    )
}

export default CannoliCard;
