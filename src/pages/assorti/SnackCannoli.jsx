import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cannoli } from "../../components";
import './SnackCannoli.css';
import './CannoliAssorti.css';



function SnackCannoli() {
    const [snack, setSnack] = useState([]);

    useEffect(() => {
        async function fetchSnack(e) {
            try {
                const response= await axios.get (`http://localhost:8080/cannolis/`);

                setSnack (response.data);

            } catch (e) {
                console.error (e);
            }
        }
        fetchSnack();
    }, []);

    return (
        <>
            <section className="snackCannoli-container">

                <h2> Cannoli snack </h2>

                <div className="cannolis-container">

                    {snack.map((cannoli) => {
                        if (cannoli.cannoliType === 'Snack')

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

export default SnackCannoli;

