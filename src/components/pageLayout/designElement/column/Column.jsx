import React from 'react';
import "./TwoColumn.css";

function Column({children}) {
    return(
        <div className="one">
            {children}
        </div>
    );
}

export default Column;
