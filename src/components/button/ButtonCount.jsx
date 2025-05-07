import React from 'react';
import './../button/ButtonCount.css';



function ButtonCount({ clickHandler, children, type, disabled}) {
    return (
        <button
            onClick={clickHandler} type={type} disabled={disabled || false} className="button__count"
            >
            {children}
        </button>
    );
}

export default ButtonCount;
