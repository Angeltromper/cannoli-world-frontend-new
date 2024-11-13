import {Route, Routes, useLocation} from "react-router-dom";
import React, {useLayoutEffect, useState} from 'react'
import headerImg from "../../cannoli-world-frontend-main/src/assets/img.header/homepage-background-2400.jpg";
import NavbarLinks from "./components/pageLayout/navbar/NavbarLinks";
import Header from "./components/pageLayout/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/pageLayout/footer/Footer";
import Assortiment from "./pages/assortiment/Assortiment";
import Cannolis from "./pages/categorien/Cannolis";
import CannoliSnack from "./pages/cannoli/CannoliSnack";
import CannoliGlutenFree from "./pages/cannoli/CannoliGlutenFree";
import CannoliVegan from "./pages/cannoli/CannoliVegan";
import CannoliView from "./components/cannoliList/CannoliView";
import CannoliIngredient from "./components/cannoliIngredient/CannoliIngredient";
import CannoliPriceList from "./pages/priceList/CannoliPriceList";
import Giftbox from "./pages/giftbox/Giftbox";
import GiftboxPriceList from "./pages/priceList/GiftboxPriceList";
import Service from "./pages/service/Service";
import Franchise from "./pages/franchise/Franchise";
import FranchiseInformation from "./pages/franchise/FranchiseInformation";
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import SearchCannoli from "./pages/searchCannoli/SearchCannoli";
import SearchResult from "./pages/searchResult/SearchResult";
import Admin_CannoliComponent from "./components/admin/Admin_CannoliComponent";
import Admin_EditCannoliComponent from "./components/admin/Admin_EditCannoliComponent";
import Admin_UserComponent from "./components/admin/Admin_UserComponent";
import PrivateRoute from "./components/pageLayout/route/PrivateRoute";
import Profile from "./pages/profile/Profile";
import Privacy from "./pages/privacy/Privacy";
import General from "./pages/privacy/General";
import Cookies from "./pages/privacy/Cookies";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import SignOut from "./pages/signOut/SignOut";
import Cart_DeliveryRequest from "./components/cart_DeliveryRequest/Cart_DeliveryRequest";
import InfoForm from "./components/form/InfoForm"
import Elements from "./pages/elements/Elements";
import FourZeroFour from "./pages/404/FourZeroFour";
import OrderList from "./components/orderList/OrderList";
import OrderLists from "./pages/orderLists/OrderLists";
import FooterNav from "./components/pageLayout/footerNav/FooterNav";
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

                        <Route path="/"
                               element={<NavbarLinks headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/assortiment"
                               element={<Assortiment headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli"
                               element={<Cannolis headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolisnack"
                               element={<CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoliglutenfree"
                               element={<CannoliGlutenFree headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolivegan"
                               element={<CannoliVegan headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli-view"
                               element={<CannoliView headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli-ingredient"
                               element={<CannoliIngredient headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli-pricelist"
                               element={<CannoliPriceList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/giftbox"
                               element={<Giftbox headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/giftbox-pricelist"
                               element={<GiftboxPriceList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

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

                        <Route path="/search-cannoli"
                               element={<SearchCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/search-result"
                               element={<SearchResult headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/profile/"
                               element={<PrivateRoute><Profile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="privacy/"
                               element={<Privacy headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="general-terms/"
                               element={<General headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="cookies/"
                               element={<Cookies headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/login/"
                               element={<SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/register/"
                               element={<SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/logout/"
                               element={<SignOut headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/design-elements/"
                               element={<Elements headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route patch="/footer-nav"
                               element={<FooterNav headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/404/"
                               element={<FourZeroFour headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/admin-addcannoli/"
                               element={<PrivateRoute><Admin_CannoliComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/admin-cannoliinfo/"
                               element={<PrivateRoute><Admin_EditCannoliComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/admin-users/"
                               element={<PrivateRoute><Admin_UserComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/cart-instruction/checkout"
                               element={<PrivateRoute><Cart_DeliveryRequest headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/deliveryRequests/:deliveryRequest_id"
                               element={<PrivateRoute><OrderList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/deliveryRequests/:deliveryRequest"
                               element={<PrivateRoute><OrderLists headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

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
