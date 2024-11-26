import React from 'react';
import "./ThreeColumn.css";

function ThreeColumn({children}) {

    return (
        <div className="columnContainer">
            {children}
        </div>
    );
}

export default ThreeColumn;

