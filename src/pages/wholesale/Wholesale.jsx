import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import WholesaleInfo from "../../components/wholesaleInfo/WholesaleInfo";
import TwoColumn from "../../components/pageLayout/designElement/column/TwoColumn";
import Column from "../../components/pageLayout/designElement/column/Column";
import './Wholesale.css';


function Wholesale({headerImageHandler, pageTitleHandler}) {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [cannolis, setCannolis] = useState([]);

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [cannoliCount, setCannoliCount] = useState(0);
    const [assessement, setAssessement] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    function resetCannolis() {
        setCannoliCount (0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
        Beoordeling: ${assessement},
        Bezorgfrequentie: ${deliveryFrequency},
        Opmerkingen: ${remark},
        Algemene voorwaarden: ${agreeTerms}
        `);
        console.log (`Cannoli bestelling - cannolis: ${cannoliCount}`);
    }

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, []);


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
                                                    // "Authorization": `Bearer ${token}`
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




           <br/>

           <TwoColumn>
               <Column>
                   <div className="beoordelingen">
                       <h3> Beoordelingen </h3>
                       <br/>
                       <h5> Je mailadres wordt niet gepubliceerd. Vereiste velden zijn gemarkeerd met *</h5>
                       <br/>
                       <h5> Je waardering * </h5>
                       <br/>
                       <h5> Je beoordeling * </h5>
                   </div>
                   <div className="form-beoordeling">
                       <textarea
                               name="beoordeling"
                               id="assessement-field"
                               value={ assessement }
                               onChange={ (e) => setAssessement() (e.target.value) }
                               rows={ 5 }
                               cols={ 40 }
                       />
                   </div>
               </Column>
               <Column>
                   <div className="form-bezorgen">
                       <h3>Bezorgservice</h3>
                       <br/>
                       <h5>De bestelling wordt gratis bezorgt vanaf € 120,-</h5>
                       <h5>Bezorgen van ma t/m vr.</h5>
                       <br/>
                       <br/>
                       <form onSubmit={ handleSubmit }>
                           <section>
                               <label htmlFor="cannoli">Bezorgfrequentie</label>
                           </section>
                           <section>
                               <select
                                   name="delivery"
                                   id="delivery-field"
                                   value={ deliveryFrequency }
                                   onChange={ (e) => toggleDeliveryFrequency (e.target.value) }
                               >
                                   <option value="week">Iedere week</option>
                                   <option value="week">Om de week</option>
                                   <option value="week">Iedere maand</option>
                               </select>
                           </section>
                           <section>
                               <br/>
                               <input
                                   type="radio"
                                   value="daytime"
                                   name="timeslot"
                                   id="timeslot-field-daytime"
                                   checked={ (e) => toggleDeliveryTimeslot (e.target.value) }
                               />
                               <label htmlFor="timeslot-field-daytime">overdag</label>
                               <input
                                   type="radio"
                                   value="evening"
                                   checked={ deliveryTimeslot === 'evening' }
                                   onChange={ (e) => toggleDeliveryTimeslot (e.target.value) }
                                   name="timeslot"
                                   id="timeslot-field-evening"
                               />
                               <label htmlFor="timeslot-field-evening">'s Avonds</label>
                           </section>
                           <section>
                               <br/>
                               <br/>
                               <label htmlFor="remark-field">Opmerking</label>
                               <textarea
                                   name="remark"
                                   id="remark-field"
                                   value={ remark }
                                   onChange={ (e) => setRemark (e.target.value) }
                                   rows={ 5 }
                                   cols={ 40 }
                               />
                           </section>
                           <section>
                               <br/>
                               <input
                                   type="checkbox"
                                   name="agree"
                                   id="agree-field"
                                   value={ agreeTerms }
                                   onChange={ (e) => toggleAgreeTerms (e.target.checked) }
                               />
                               <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
                           </section>

                           <button
                               type="submit"
                               className="button-sent">Verzend
                           </button>
                       </form>
                   </div>
               </Column>
           </TwoColumn>

       </section>
   );
}

export default Wholesale;


