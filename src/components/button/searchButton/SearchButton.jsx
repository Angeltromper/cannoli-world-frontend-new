import React from 'react';
import './SearchButton.css';

function Button({onClick, text, type}) {
    return (
        <div>
            <button onClick={ onClick } type={ type } className="search-button__reusable">
                { text }
            </button>

        </div>
    );
}


export default Button;
