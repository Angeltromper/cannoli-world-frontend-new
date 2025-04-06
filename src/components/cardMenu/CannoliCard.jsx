import React from "react";
import "./CannoliCard.css";


function CannoliCard
({ image, imageAlt, description, formattedPrice, onClick }) {

    return (
        <div className="cannoli-card">
            <img className="cannoli-card__image" src={ image } alt={imageAlt}/>
            <p className="cannoli-card__description">{ description }</p>
            <p className="cannoli-card__price">{ formattedPrice }</p>

            <button type= { onClick }>
                <p className="cannoli-card__buttonlist">Assortiment</p>
            </button>
        </div>
    )
}

export default CannoliCard;
