/*
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import WholesaleInfo from "../../components/wholesaleInfo/WholesaleInfo";
import './Wholesale.css';
import TwoColumn from "../../components/pageLayout/designElement/column/TwoColumn";
import Column from "../../components/pageLayout/designElement/column/Column";


function Wholesale({headerImageHandler, pageTitleHandler}){
    const {id} = useParams();
*/

    /*  const [loading, setLoading] = useState(false);*/
    const [cannolis, setCannolis] = useState([]);

    /*    const {user: {username}} = useContext(AuthContext);*/
    /*    const navigate = useNavigate();*/
    /*    const token = localStorage.getItem('token');*/


    /*
        useEffect(() => {
            headerImageHandler ();
            pageTitleHandler();
        }, []);
    */

    /*
        async function sendCannoliData(cannolidata) {
            try {
                await axios.put(`http://localhost:8080/cannolis/${cannoli_id}`,
                    {
                        id: cannolidata.cannoli_id,
                        cannoliName: cannolidata.cannoli_name,
                        cannoliType: cannolidata.cannoli_type,
                        cannoliDescription: cannolidata.cannoli_description,
                        cannoliIngredients: cannolidata.cannoli_ingredients,
                        cannoliPrice: cannolidata.cannoli_price
                    }, {
                        headers: {
                            'Content-Type': "application/json",
                        }
                    }).then (updatedCannoli)
            } catch (error) {
                console.error(error);
            }
        }
        function updatedCannoli() {
            navigate(`/cannoli`)
        }


        async function sendCannoliData(cannolidata) {
            try {
                await axios.post (`http://localhost:8080/cannoli/create`,
                    {

                        id: cannolidata.id,
                        cannoliName: cannolidata.cannoli_name,
                        cannoliType: cannolidata.cannoli_type,
                        cannoliDescription: cannolidata.cannoli_description,
                        cannoliIngredients: cannolidata.cannoli_ingredients,
                        cannoliPrice: cannolidata.cannoli_price,
                    }).then(addedNewCannoli)

            } catch (error) {
                console.error (error);
            }
        }

        console.log();
    */



 /*   useEffect( () => {
        async function fetchCannolis() {
            try {
                const cannolis = await axios.get (`http://localhost:8080/cannolis/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                                                       "Authorization": `Bearer ${token}`
                        }
                    });



                setCannolis(cannolis.data)

            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        fetchCannolis ();
    },[]);

    return(
        <section className="wholesale">
            <TextContainer>
                <h1> Cannoli </h1>
            </TextContainer>

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








            <div className="beoordeling-container">
                <h3> Beoordelingen </h3>
                <h5> Je mailadres wordt niet gepubliceerd. Vereiste velden zijn gemarkeerd met *</h5>
                <br/>
                <h5> Je waardering * </h5>
                <br/>
                <h5> Je beoordeling * </h5>

                <div className="beoordeling-page">
                    <div className="form-beoordeling">


                    </div>
                </div>
            </div>
        </section>


    );
}

export default Wholesale;

*/
