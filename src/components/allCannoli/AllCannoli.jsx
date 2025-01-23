/*
import { useEffect, useState } from 'react';
import {Button} from "../button/Button";
import './AllCannolis.css';



export function CannolisWrapper({children}) {
    return (
        <section className="cannolis">
            <div className="container">
                <div className="columns">
                    {children}
                </div>
            </div>
        </section>
    )
}

export function AllCannolis({image, cannoliName, flavour, price, id}) {
    const [cannoliImage, setCannoliImage] = useState(null);

    useEffect(() => {
        getDownloadURL(ref(storage,image)).then((url ) => {
            setCannoliImage(url);
        })
    }, []);

    return (
        <div className="col-1 col-2 col-3">
            <div className="cannolis-card shadow">
                <div className="image-wrapper">
                    <img src={cannoliImage} alt={cannoliName}/>
                </div>
                <div className="content">
                    <h2>{cannoliName}</h2>
                    <div className="specifics">
                        <table>
                            <tbody>
                            <tr>
                                <td>Cannoli:</td>
                                <td>{flavour} smaak</td>
                            </tr>

                            <tr>
                                <td>Prijs</td>
                                <td>{price}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Button url={`/cannoli/${id}`} variation="secondary" size="small">meer informatie</Button>
                </div>
            </div>
        </div>
    );
}


export default class AllCannoli {
}
*/
