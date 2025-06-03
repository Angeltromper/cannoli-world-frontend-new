import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cannoli } from "../../components";
import './GlutenfreeCannoli.css';



function GlutenfreeCannoli() {
    const [glutenfree, setGlutenfree] = useState([]);


    useEffect(() => {
        async function fetchGlutenfree(e) {
            try {
                const response = await axios.get ('http://localhost:8080/cannolis/');

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

                <h2> Cannoli glutenfree </h2>

                <div className="cannolis-container">

                    {glutenfree.map((cannoli) => {
                        if (cannoli.cannoliType === 'Glutenfree')

                            return (
                                cannoli.image !== null ?

                                    <Cannoli key={cannoli.id}
                                                url={cannoli.image.url}
                                                cannoli_id={cannoli.id}
                                                cannoliName={cannoli.cannoliName}
                                                cannoliPrice={cannoli.cannoliPrice}
                                    />
                                    :
                                    <Cannoli key={cannoli.id}
                                                cannoli_id={cannoli.id}
                                                cannoliName={cannoli.cannoliName}
                                                cannoliPrice={cannoli.cannoliPrice}
                                    />
                            )
                    })}
                </div>
            </section>
        </>
    );
}

export default GlutenfreeCannoli;











