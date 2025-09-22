import 'react';
import "./TwoColumn.css";

function TwoColumn({children}) {

    return (
        <div className="columnContainer">
            {children}
        </div>
    );
}

export default TwoColumn;
