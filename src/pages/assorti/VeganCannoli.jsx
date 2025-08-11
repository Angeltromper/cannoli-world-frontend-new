import React, { useEffect, useState } from "react";
import axios from "axios";
import Cannoli from "../../components/cannoli/Cannoli";
import './VeganCannoli.css';


function VeganCannoli() {
    const [vegan, setVegan] = useState([]);

    useEffect(() => {
        async function fetchVegan(e) {
            try {
                const response = await axios.get('http://localhost:8080/cannolis/');

                setVegan (response.data);

            } catch (e) {
                console.error (e);
            }
        }
        fetchVegan();
    }, []);

    return (
        <>
            <section className="veganCannoli-container">

                <h2> Cannoli vegan </h2>

                <div className="cannolis-container">

                    {vegan.map((cannoli) => {
                        if (cannoli.cannoliType === 'Vegan')

                            return (
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
                            )
                    })}
                </div>
            </section>
        </>
    );
}

export default VeganCannoli;
