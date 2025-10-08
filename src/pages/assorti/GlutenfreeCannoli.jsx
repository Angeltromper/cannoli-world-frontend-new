import  { useEffect, useState } from "react";
import axios from "axios";
import Cannoli from "../../components/cannoli/Cannoli";
import pageImg from "../../assets/background cannolis.jpg";
import './GlutenfreeCannoli.css';

function GlutenfreeCannoli({ headerImageHandler, pageTitleHandler }) {
    const [glutenfree, setGlutenfree] = useState([]);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Cannoli Almond");
    }, [headerImageHandler, pageTitleHandler]);

    useEffect(() => {
        async function fetchGlutenfree(e) {
            try {
                const response= await axios.get (`http://localhost:8080/cannolis/`);

                setGlutenfree (response.data);

            } catch (e) {
                console.error (e);
            }
        }
        fetchGlutenfree();
    }, []);

    return (
        <>
            <section className="glutenfreeCannoli-container">
                <div className="cannolis-container">

                    {glutenfree.map((cannoli) => {
                        if (cannoli.cannoliType === 'Glutenfree')

                            {return (
                                cannoli.image !== null ?

                                    <Cannoli key={cannoli.id}
                                             url={cannoli.image.url}
                                             cannoli_id={cannoli.id}
                                             cannoliName={cannoli.cannoliName}
                                             cannoliPrice={cannoli.price}
                                    />
                                    :
                                    <Cannoli key={cannoli.id}
                                             cannoli_id={cannoli.id}
                                             cannoliName={cannoli.cannoliName}
                                             cannoliPrice={cannoli.price}
                                    />
                            )}
                    })}
                </div>
            </section>
        </>
    );
}

export default GlutenfreeCannoli;






