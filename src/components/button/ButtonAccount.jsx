
import { useNavigate } from "react-router-dom";
import {ReactComponent as UserIcon} from '../../assets/svg/user.svg';



function InlogButton() {

    const navigate = useNavigate ();

    function redirect() {
        navigate("/login")
    }

    return (
        <button className="inlog-button"
             button type="button"
             onClick={ redirect } >
            <UserIcon />
        </button>
    )
}

export default InlogButton;


