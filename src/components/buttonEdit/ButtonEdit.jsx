import React from "react";
import { useNavigate } from "react-router-dom";
import pencilButton from '../../assets/navIcon/pencil.png';
import './ButtonEdit.css';


function ButtonEdit() {

    const navigate = useNavigate ();

    function redirect() {
      navigate(`/userform/:user_id/`)
   }



    return (

         <button className="edit-pencil"
              onClick={ redirect }>

             <div className="pencil-button">
                 <img src={pencilButton} alt="pencil" />
                 wijzig adres
             </div>
         </button>

    )
}

export default ButtonEdit;




