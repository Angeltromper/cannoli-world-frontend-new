import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import { useParams } from "react-router-dom";
import WholesaleInfo from "../../components/wholesaleInfo/WholesaleInfo";
import './Wholesale.css';


function Wholesale({headerImageHandler, pageTitleHandler}) {
    const {id} = useParams();
    const [cannolis, setCannolis] = useState([]);



    function resetCannolis() {
        setCannoliCount (0);
    }

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, []);



   useEffect( () => {
       async function fetchCannolis() {
           try {
               const cannolis = await axios.get (`http://localhost:8080/cannolis/${id}`,
                   {
                       headers: {
                           "Content-Type": "application/json",
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
       </section>
   );
}

export default Wholesale;


