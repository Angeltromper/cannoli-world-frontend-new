import  { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import notFoundImg from '../../assets/404.png';
import './FourZeroFour.css';

export default function FourZeroFour() {
    const {pathname}  = useLocation();

    useEffect(() => {
        console.log("[404] render op",pathname );
    }, [pathname]);

    return (
        <main className="fourzfour">
            <figure className="fourzfour__figure">
                <img className="fourzfour__img"
                src={notFoundImg}
                     alt="Pagina niet gevonden"
                     width={400}
                     height={280}
                />

                <figcaption className="fourzfour__info">
                    Oeps! - deze pagina bestaat niet.
                </figcaption>
                <Link to="/" className="fourzfour__btn">Terug naar de homepagina</Link>
            </figure>
        </main>
    );
}



