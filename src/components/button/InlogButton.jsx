import { useNavigate } from "react-router-dom";
import Svg from "../../assets/svg/user-svgrepo-com.svg";


function AccountButton() {

    const navigate = useNavigate ();

    function redirect() {
        navigate("/login")
    }

    return (
        <div className="account-button"
             type="button"
             onClick={ redirect } >

            <Svg/>
        </div>
    )
}

export default AccountButton;


