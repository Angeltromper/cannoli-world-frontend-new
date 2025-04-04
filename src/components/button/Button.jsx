import React from 'react';
import "./Button.css";

function Button({onClick, text, type}) {
    return (
        <button onClick={onClick} type={type} className="button__reusable">
            {text}
        </button>
    )


}

export default Button;



