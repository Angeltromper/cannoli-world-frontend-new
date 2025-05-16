import { useNavigate } from "react-router-dom";
import userIcon from '../../assets/navIcon/pencil.png';

function EditButton() {

    const history = useNavigate ();

    function redirect() {
        history("/users/:user_id")
    }

    return (
        <div className="edit-pencil"
             button type="button"
             onClick={ redirect } >
            <userIcon/>
        </div>
    )
}
export default EditButton;
