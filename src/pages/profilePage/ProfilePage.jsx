import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import pageImg from "../../assets/img.background/background cannolis.jpg";
import logo from "../../assets/logo/Logo Cannoli.png";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import ButtonEdit from "../../components/buttonEdit/ButtonEdit";
import './ProfilePage.css';





function ProfilePage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const {user:{username}} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminInput, setAdminInput] = useState([]);

    // useEffect(() => {
    //     headerImageHandler(pageImg);
    //    pageTitleHandler();
    // }, [headerImageHandler, pageTitleHandler]);


    function editUsers() {
        navigate(`/user-view/`)
    }

    function editCannolis() {
        navigate(`/cannolis-add/`)
    }

    useEffect(()=> {
        // const source =axios.CancelToken.source();


        async function fetchAdmin() {
            try {
                const response = await axios.get (`http://localhost:8080/users/${username}/`,
                    {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": `Bearer ${ token }`,
                        }
                    }
                );

                setAdminInput (response.data)

                     if ( response.data.roles[0].authority ==='ROLE_ADMIN') {
                         setIsAdmin (true);
                     } else {
                         setIsAdmin (false);
                     }

            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        // getData(username, token);
        // return function cleanup() {
       // /     source.cancel();
       //  }

        fetchAdmin ();
    }, [isAdmin, token]);


    return (
        <>
            <TextContainer>
                <h2>Welkom {username}</h2>
            </TextContainer>

            <div className="profile-welcomepage scale-up-hor-left-right">
                {/*<div className="inner-container__reusable default-text-restrictor">*/}
                    <h5> Op deze pagina kunt u al uw gegevens bekijken.</h5>
                    <h5> U kun producten bestellen en of aanpassen.</h5>
                {/*</div>*/}
            </div>

            <div className="profilepage-menu">
                <ButtonEdit/>

                <div>
                    <figure><img src={ logo } alt="logo" className="profilepage-menu-logo scale-up-hor-left-right"/></figure>
                </div>
            </div>


            {isAdmin &&
                <div>
                    <TextContainer>
                      <h3>Info Gegevens</h3>

                   </TextContainer>

                    <div className="profile-info-container" >
                        {/*<div className="inner-container__reusable default-text-restrictor">*/}
                            <h5>Voor het bekijken/wijzigen van persoongegevens en het aanpassen/toevoegen van cannoli's.</h5>
                        {/*</div>*/}
                    </div>

                    <div className="profile-info">
                        <h5>Klikt u op:</h5>

                        <div className="profile-info-view"
                             onClick={ editUsers }> Persoongegevens
                        </div>

                        <div className="profile-info-added"
                             onClick={ editCannolis }> Cannolis
                        </div>

                    </div>
                </div>
            }
            </>
    );
}

export default ProfilePage;
