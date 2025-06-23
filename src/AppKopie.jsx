import {Route, Routes, useLocation} from "react-router-dom";
import React, {useLayoutEffect, useState} from 'react'
import headerImg from "../../cannoli-world-frontend-main/src/assets/img.header/homepage-background-2400.jpg";
import {Cart} from "./components/cart/Cart";
import Header from "./components/pageLayout/header/Header";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./components/pageLayout/footer/Footer";
import Cannolis from "./pages/assorti/Cannolis";
import CannoliAssorti from "./pages/assorti/CannoliAssorti";
import CannoliSnack from "./pages/cannoli/CannoliSnack";
import CannoliGlutenFree from "./pages/cannoli/CannoliGlutenFree";
import CannoliVegan from "./pages/cannoli/CannoliVegan";
import Counter from "./components/counter/Counter";
import Giftbox from "./pages/giftbox/Giftbox";
import Service from "./pages/service/Service";
import Franchise from "./pages/franchise/Franchise";
import FranchiseInformation from "./pages/franchise/FranchiseInformation";
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Admin_WholesaleEditComponent from "./components/admin/Admin_WholesaleEditComponent";
import Admin_WholesaleComponent from "./components/admin/Admin_WholesaleComponent";
import Admin_UserComponent from "./components/admin/Admin_UserComponent";
import PrivateRoute from "./components/pageLayout/route/PrivateRoute";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Cookies from "./pages/privacy/Cookies";
import General from "./pages/privacy/General";
import Privacy from "./pages/privacy/Privacy";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Wholesale from "./pages/wholesale/Wholesale";
import CartDeliveryRequest from "./components/cartDeliveryRequest/CartDeliveryRequest";
import UserForm from "./components/form/UserForm"
import FourZeroFour from "./pages/404/FourZeroFour";
import OrderListComponent from "./components/order/OrderListComponent";
import OrderList from "./pages/orderList/OrderList";
import ButtonEdit from "./components/buttonEdit/ButtonEdit";
import ImageCannoliComponent from "./components/imageUploaden/ImageCannoliComponent";
import SnackCannoli from "./pages/assorti/SnackCannoli";
import GlutenfreeCannoli from "./pages/assorti/GlutenfreeCannoli";
import VeganCannoli from "./pages/assorti/VeganCannoli";
import './App.css';

function AppKopie () {
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
                <div className="inner-container__reusable default-text-restrict">

                    <Header headerImage={headerImage} pageTitle={pageTitle}/>

                    <Routes>
                        <Route path="/"
                               element={<HomePage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli"
                               element={<Cannolis headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli-assorti"
                               element={<CannoliAssorti headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/snack-cannoli/assorti"
                               element={<SnackCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/glutenfree-cannoli/assorti"
                               element={<GlutenfreeCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/vegan-cannoli/assorti"
                               element={<VeganCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolisnack"
                               element={<CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoliglutenfree"
                               element={<CannoliGlutenFree headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolivegan"
                               element={<CannoliVegan headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/counter"
                               element={<Counter headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

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

                        <Route path="/cannolis/image/:cannoli_id"
                               element={<ImageCannoliComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolis/info/:cannoli_id"
                               element={<Admin_WholesaleEditComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/profile"
                               element={<PrivateRoute><ProfilePage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/cannolis-add/"
                               element={<PrivateRoute><Admin_WholesaleComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/user-view/"
                               element={<PrivateRoute><Admin_UserComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/checkout"
                               element={<PrivateRoute><Cart headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/cart-instruction/checkout"
                               element={<PrivateRoute><CartDeliveryRequest headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/deliveryRequests/:deliveryRequest_id"
                               element={<PrivateRoute><OrderListComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/deliveryRequests"
                               element={<PrivateRoute><OrderList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/button-edit"
                               element={<PrivateRoute><ButtonEdit headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route exact path="/userform/:user_id"
                               element={<PrivateRoute><UserForm headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </Wrapper>
    );
}

export default AppKopie;
