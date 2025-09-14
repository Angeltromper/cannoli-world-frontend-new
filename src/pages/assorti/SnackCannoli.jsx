import React, { useEffect, useState } from "react";
import axios from "axios";
import Cannoli from "../../components/cannoli/Cannoli";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './SnackCannoli.css';

function SnackCannoli() {
    const [snack, setSnack] = useState([]);

    useEffect(() => {
        async function fetchSnack(e) {
            try {
                const response= await axios.get (`http://localhost:8080/cannolis/`);

                setSnack(response.data);

            } catch (e) {
                console.error (e);
            }
        }
        fetchSnack();
    }, []);

    return (
        <>
            <TextContainer>
                <h2>Cannoli snack</h2>
            </TextContainer>

            <section className="snackCannoli-container">
                <div className="cannolis-container">

                    {snack.map((cannoli) => {
                        if (cannoli.cannoliType === 'Snack')

                            return (
                                cannoli.image !== null ?

                                    <Cannoli key={cannoli.id}
                                             url={cannoli.image.url}
                                             cannoli_id={cannoli.id}
                                             cannoliName={cannoli.cannoliName}
                                             cannoliType={cannoli.cannoliType}
                                             cannoliPrice={cannoli.price}
                                    />
                                    :
                                    <Cannoli key={cannoli.id}

                                             cannoli_id={cannoli.id}
                                             cannoliName={cannoli.cannoliName}
                                             cannoliType={cannoli.cannoliType}
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





