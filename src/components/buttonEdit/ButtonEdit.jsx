import { useNavigate } from "react-router-dom";
import userIcon from '../../assets/navIcon/pencil.png';
import React from "react";


function EditButton() {

    const navigate = useNavigate ();

    function redirect() {
        navigate(`/userform/:user_id`)
    }

    return (

        <div className="edit-pencil"
             button type="button"
             onClick={ redirect }>
            <userIcon/>
        </div>

  /*
    <div className="delete-button"
         onClick={() => deleteDeliveryRequest (deliveryRequest.id)}>
        Verwijder
    </div>
*/


    )
}
export default EditButton;
