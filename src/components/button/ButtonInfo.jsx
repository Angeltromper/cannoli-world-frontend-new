import { Link } from "react-router-dom";

export function ButtonInfo({variation, url, size, children, onClick}) {
    return (
        <Link to={ url } onClick={onClick} className={ `button button-${ variation } button-${ size }` }>{ children }</Link>
    );
}

