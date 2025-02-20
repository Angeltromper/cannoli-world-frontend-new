/*
import React, {useEffect, useState} from 'react';
import axios from "axios";
import AllCannoli from "../../../components/allCannoli/AllCannoli";
import './CannoliAssorti.css';


function CannoliAssorti() {

    const [cannoliDivers, setCannoliDivers] = useState([ ]);

    useEffect (() => {
        async function fetchCannoliDivers(e) {
            try{
                const response = await axios.get ('https;//localhost:8080/cannolis/');

                setCannoliDivers(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchCannoliDivers();
    }, []);

    return (
        <>
            <section className="zoetwaar-container">

                <h2> Cannoli assortiment </h2>

                <div className="cannoli-container">

                    {cannoliDivers.map((cannoli) => {
                        if (cannoli.cannoliType === 'Cannoli')

                            return (
                                cannoli.image !== null ?

                                    <AllCannoli key={cannoli.id}

                                                url={cannoli.image.url}
                                                cannoli_id={cannoli.id}
                                                cannoliName={cannoli.cannoliName}
                                                cannoliPrice={cannoli.price}
                                    />
                                    :
                                    <AllCannoli key={cannoli.id}

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

export default CannoliAssorti;
*/
