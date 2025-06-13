import { Link } from "react-router-dom";
import './ButtonInfo.css';


export function ButtonGroup({children}) {
    return (
        <div className="button-group">
            {children}
        </div>
    );
}


export function ButtonInfo({variation, url, size, children, onClick}) {
    return (
        <Link to={ url } onClick={onClick} className={ `button button-${ variation } button-${ size }` }>{ children }</Link>
    );
}

