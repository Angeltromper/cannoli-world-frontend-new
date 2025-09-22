import  { useEffect, useState } from "react";
import axios from "axios";
import Cannoli from "../../components/cannoli/Cannoli";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './SnackCannoli.css';
import pageImg from "../../assets/img.background/background cannolis.jpg";

function SnackCannoli({ headerImageHandler, pageTitleHandler }) {
    const [snack, setSnack] = useState([]);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Cannoli Snack");
    }, [headerImageHandler, pageTitleHandler]);


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
            <section className="snackCannoli-container">
                <div className="cannolis-container">

                    {snack.map((cannoli) => {
                        if (cannoli.cannoliType === 'Snack')

                            {return (
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
                            )}
                    })}
                </div>
            </section>
        </>
    );
}

export default SnackCannoli;





