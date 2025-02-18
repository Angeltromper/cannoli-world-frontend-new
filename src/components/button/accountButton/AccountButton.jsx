import { useNavigate } from "react-router-dom";
import NavIcon from '../../../assets/navIcon/account.svg';


function AccountButton() {

    const navigate = useNavigate ();

    function redirect() {
  /*      navigate('/persoonsgegevens')*/
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


