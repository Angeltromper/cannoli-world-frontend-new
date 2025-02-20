import {Route, Routes, useLocation} from "react-router-dom";
import React, {useLayoutEffect, useState} from 'react'
import headerImg from "../../cannoli-world-frontend-main/src/assets/img.header/homepage-background-2400.jpg";
import {Cart} from "./components/cart/Cart";
import NavbarLinks from "./components/pageLayout/navbar/NavbarLinks";
import Header from "./components/pageLayout/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/pageLayout/footer/Footer";
import Cannolis from "./pages/categorien/Cannolis";
import CannoliAssorti from "./pages/categorien/zoetigheid/CannoliAssorti";
import CannoliSnack from "./pages/cannoli/CannoliSnack";
import CannoliGlutenFree from "./pages/cannoli/CannoliGlutenFree";
import CannoliVegan from "./pages/cannoli/CannoliVegan";
import CannoliIngredient from "./components/cannoliIngredient/CannoliIngredient";
import CannoliPriceList from "./pages/priceList/CannoliPriceList";
import CannoliImage from "./components/cannoli/CannoliImage";
import CannoliInfo from "./components/cannoli/CannoliInfo";
import Giftbox from "./pages/giftbox/Giftbox";
import GiftboxPriceList from "./pages/priceList/GiftboxPriceList";
import Service from "./pages/service/Service";
import Franchise from "./pages/franchise/Franchise";
import FranchiseInformation from "./pages/franchise/FranchiseInformation";
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import SearchCannoli from "./pages/searchCannoli/SearchCannoli";
import SearchResult from "./pages/searchResult/SearchResult";
import Admin_CannoliWholesaleComponent from "./components/admin/Admin_CannoliWholesaleComponent";
import Admin_CannoliComponent from "./components/admin/Admin_CannoliComponent";
import Admin_UserComponent from "./components/admin/Admin_UserComponent";
import Image_CannoliComponent from "./components/image/Image_CannoliComponent";
import PrivateRoute from "./components/pageLayout/route/PrivateRoute";
import ProfileInfo from "./pages/profileInfo/ProfileInfo";
import Cookies from "./pages/privacy/Cookies";
import General from "./pages/privacy/General";
import Privacy from "./pages/privacy/Privacy";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import SignOut from "./pages/signOut/SignOut";
import Wholesale from "./pages/wholesale/Wholesale";
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

                        <Route path="/cannoli"
                               element={<Cannolis headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli-assorti"
                               element={<CannoliAssorti headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolisnack"
                               element={<CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoliglutenfree"
                               element={<CannoliGlutenFree headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolivegan"
                               element={<CannoliVegan headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli-ingredient"
                               element={<CannoliIngredient headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannoli-pricelist"
                               element={<CannoliPriceList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolis/image/:id"
                               element={<CannoliImage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolis/info/:id"
                               element={<CannoliInfo headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

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

                        <Route path="/profile-info"
                               element={<PrivateRoute><ProfileInfo headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

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

                        <Route path="/logout/"
                               element={<SignOut headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/wholesale/:id"
                               element={<Wholesale headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/design-elements/"
                               element={<Elements headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route patch="/footer-nav"
                               element={<FooterNav headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/404/"
                               element={<FourZeroFour headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/admin-cannoliwholesale/:id"
                               element={<Admin_CannoliWholesaleComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolis/image/:id"
                               element={<Image_CannoliComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                        <Route path="/cannolis-add/"
                               element={<PrivateRoute><Admin_CannoliComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/user-view/"
                               element={<PrivateRoute><Admin_UserComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                        <Route path="/checkout/"
                               element={<PrivateRoute><Cart headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

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
