import React, { useEffect, useState } from "react";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import TwoColumn from "../../components/pageLayout/designElement/column/TwoColumn";
import Column from "../../components/pageLayout/designElement/column/Column";
import './Wholesale.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import cannolis from "../categorien/Cannolis";


function Wholesale({headerImageHandler, pageTitleHandler}){
    const {id} = useParams();
    const navigate = useNavigate();
    /*const token = localStorage.getItem('token');*/

    const [cannoils, setCannolis] = useState([]);


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
*/

    async function sendCannoliData(cannolidata) {
        try {
            await axios.post (`http://localhost:8080/cannoli/create`,
                {

                    id: cannolidata.cannoli_id,
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

    function addedNewCannoli() {
        navigate('/cannolis')
    }

    useEffect( () => {
        async function fetchCannolis() {
            try {
                const result = await axios.get (`http://localhost:8080/cannolis/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
/*                            "Authorization": `Bearer ${token}`,*/
                        }
                    }
                );
                console.log (result)
            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        fetchCannolis ();
    },[cannolis]);


    return(
        <wholesale className="wholesale">
            <TextContainer>
                <h2> Cannoli </h2>
            </TextContainer>

            <TwoColumn>
                <Column>





                </Column>
                <Column>




                </Column>
            </TwoColumn>


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

        </wholesale>


    )

}

export default Wholesale;
