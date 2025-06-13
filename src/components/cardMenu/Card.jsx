import  React from 'react';
import { Link } from "react-router-dom";
import { ButtonInfo } from "../button/ButtonInfo";
import './Card.css';



function Card({title, content, image, imageAlt, id, onMoreInfoClick }) {
    return (
        <div className="card-container">
            <img className="card-image" src={ image } alt={ imageAlt }/>

            <div className="text-container">
                <h2>{ title }</h2>
                { content }
            </div>

            <ButtonInfo
                url="#"
                variation="secondary"
                size="small"
                onClick={(e) => {
                    e.preventDefault();
                    if (onMoreInfoClick) onMoreInfoClick(title);
                }}
            >
                Meer Informatie
            </ButtonInfo>

            <Link to={'/register'}>
                <p className="btn-text-registreren">Registreer/Log in om prijzen te kunnen zien</p>
            </Link>
        </div>
    );
}


export default Card;
