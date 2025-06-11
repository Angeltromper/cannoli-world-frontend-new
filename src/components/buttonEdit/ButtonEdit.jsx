import React from "react";
import { useNavigate } from "react-router-dom";
import pencilIcon from '../../assets/svg/pencil.svg';
import './ButtonEdit.css';

// function ButtonEdit({onClick}) {

function ButtonEdit({userId}) {
    const navigate = useNavigate ();

    function redirect() {
        navigate(`/userform/${userId}`);
    }

    return (
        <button className="edit-button" onClick={redirect}>
            <img src={ pencilIcon } alt="wijzig adres" />
        </button>
    );
}

export default ButtonEdit;




