/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import { useParams } from "react-router-dom";
import WholesaleInfo from "../../components/wholesaleInfo/WholesaleInfo";
import './Wholesale.css';


function WholesaleKopie({headerImageHandler, pageTitleHandler}) {
    const {id} = useParams();
    const [cannolis, setCannolis] = useState([]);


    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, []);



    useEffect( () => {
        async function fetchCannolis() {
            try {
                const cannolis = await axios.get (`http://localhost:8080/cannolis/${id}`);

                setCannolis(cannolis.data)

            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        fetchCannolis();
    },[]);

    return(
        <section className="wholesale">
            <div className="wholesale-container">
                <section className="wholesale-layout">
                    {cannolis.image ?

                        <WholesaleInfo key={cannolis.id}

                                       fileName={cannolis.image.fileName}
                                       url={cannolis.image.url}
                                       cannoli_id={cannolis.id}
                                       cannoliType={cannolis.cannoliType}
                                       cannoliName={cannolis.cannoliName}
                                       cannoliPrice={cannolis.price}
                                       cannoliDescription={cannolis.description}
                                       cannoliIngredients={cannolis.ingredients}
                        />
                        :
                        <WholesaleInfo key={cannolis.id}

                                       cannoli_id={cannolis.id}
                                       cannoliType={cannolis.cannoliType}
                                       cannoliName={cannolis.cannoliName}
                                       cannoliPrice={cannolis.price}
                                       cannoliDescription={cannolis.description}
                                       cannoliIngredients={cannolis.ingredients}
                        />
                    }
                </section>
            </div>
        </section>
    );
}

export default WholesaleKopie;
*/
