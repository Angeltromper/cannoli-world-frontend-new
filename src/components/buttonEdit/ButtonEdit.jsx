import React from "react";
import { useNavigate } from "react-router-dom";
import pencilIcon from '../../assets/svg/pencil.svg';
import './ButtonEdit.css';


function ButtonEdit() {
    const navigate = useNavigate ();

    function redirect() {
        navigate(`/userform/:user_id`);
    }

    return (
        <button className="button-edit" onClick={redirect}>
            <img src={ pencilIcon } alt="wijzig adres" />
        </button>
    );
}

export default ButtonEdit;
