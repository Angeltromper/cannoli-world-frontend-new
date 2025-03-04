import { useNavigate } from "react-router-dom";
import NavIcon from '../../../assets/navIcon/login.png';


function AccountButton() {

    const navigate = useNavigate ();

    function redirect() {
        navigate("/profile-info")
    }

    return (
        <div className="account-button"
             type="button"
             onClick={ redirect } >

            <NavIcon/>
        </div>
    )
}

export default AccountButton;


