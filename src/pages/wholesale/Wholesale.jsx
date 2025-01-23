import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import TwoColumn from "../../components/pageLayout/designElement/column/TwoColumn";
import Column from "../../components/pageLayout/designElement/column/Column";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './Wholesale.css';





function Wholesale({headerImageHandler, pageTitleHandler}){
    const {id} = useParams();


/*  const [loading, setLoading] = useState(false);*/
    const [cannolis, setCannolis] = useState([]);
    const [cannoliImage, setCannoliImage] = useState([]);



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



    useEffect( () => {
        async function fetchCannolis() {
            try {
                const cannolis = await axios.get (`http://localhost:8080/cannolis/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
/*                            "Authorization": `Bearer ${token}`,*/
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
                <h2> Cannoli </h2>
            </TextContainer>

            <div className="wholesale-container">
                <section className="wholesale-layout">


                {cannolis.image ?



                    <img src={cannolis.image.url}  alt={cannolis.image.fileName}/>
                    :
                    <p className="cannoli-image-style">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci cupiditate dolores id
                        illum nemo officia officiis quos sed vero.

                    </p>

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
    )
}

export default Wholesale;
