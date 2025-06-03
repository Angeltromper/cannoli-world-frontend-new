import {Route, Routes, useLocation} from "react-router-dom";
import React, {useLayoutEffect, useState} from 'react'
import headerImg from "../../cannoli-world-frontend-main/src/assets/img.header/homepage-background-2400.jpg";
import {Cart} from "./components/cart/Cart";
import Header from "./components/pageLayout/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/pageLayout/footer/Footer";
import CannoliSnack from "./pages/cannoli/CannoliSnack";
import CannoliGlutenFree from "./pages/cannoli/CannoliGlutenFree";
import CannoliVegan from "./pages/cannoli/CannoliVegan";
import Giftbox from "./pages/giftbox/Giftbox";
import Service from "./pages/service/Service";
import Franchise from "./pages/franchise/Franchise";
import FranchiseInformation from "./pages/franchise/FranchiseInformation";
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Admin_WholesaleComponent from "./components/admin/Admin_WholesaleComponent";
import Admin_WholesaleEditComponent from "./components/admin/Admin_WholesaleEditComponent";
import Admin_UserComponent from "./components/admin/Admin_UserComponent";
import PrivateRoute from "./components/pageLayout/route/PrivateRoute";
import Cookies from "./pages/privacy/Cookies";
import General from "./pages/privacy/General";
import Privacy from "./pages/privacy/Privacy";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Wholesale from "./pages/wholesale/Wholesale";
import Cart_DeliveryRequest from "./components/cartDeliveryRequest/Cart_DeliveryRequest";
import InfoForm from "./components/form/UserForm"
import FourZeroFour from "./pages/404/FourZeroFour";
import './App.css';


function App () {
    const [headerImage, setHeaderImage] = useState(headerImg);
    const [pageTitle, setPageTitle] = useState();


    const Wrapper = ({ children }) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    };

    return (


        <Wrapper>


            <div className="container">
                <div className="inner-container__reusable default-area-padding default-text-restrict">

                    <Header headerImage={headerImage} pageTitle={pageTitle}/>


                    <Routes>
                        <Route path="/"
                               element={<Homepage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolisnack"
                               element={<CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoliglutenfree"
                               element={<CannoliGlutenFree headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolivegan"
                               element={<CannoliVegan headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/giftbox"
                               element={<Giftbox headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/service"
                               element={<Service headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/franchise"
                               element={<Franchise headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/franchise-information"
                               element={<FranchiseInformation headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/contact"
                               element={<Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/forgot-password"
                               element={<ForgotPassword headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="privacy/"
                               element={<Privacy headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="general-terms/"
                               element={<General headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="cookies/"
                               element={<Cookies headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route exact path="/login"
                               element={<SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/register"
                               element={<SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/wholesale/:id"
                               element={<Wholesale headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/404/"
                               element={<FourZeroFour headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/wholesale/:id"
                               element={<Admin_WholesaleComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolis-add/"
                               element={<PrivateRoute><Admin_WholesaleEditComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/user-view/"
                               element={<PrivateRoute><Admin_UserComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/checkout/"
                               element={<PrivateRoute><Cart headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/cart-instruction/checkout"
                               element={<PrivateRoute><Cart_DeliveryRequest headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route exact path="/users/:user_id"
                               element={<PrivateRoute><InfoForm headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                    </Routes>
                    <Footer/>
                </div>
            </div>
        </Wrapper>
    );
}

export default App;
