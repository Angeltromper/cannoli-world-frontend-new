import React, { useLayoutEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import Header from "./components/pageLayout/header/Header";
import Footer from "./components/pageLayout/footer/Footer";
import PrivateRoute from "./components/pageLayout/route/PrivateRoute";

import HomePage from "./pages/homepage/HomePage";
import Cannolis from "./pages/assorti/Cannolis";
import CannoliAssorti from "./pages/assorti/CannoliAssorti";
import SnackCannoli from "./pages/assorti/SnackCannoli";
import GlutenfreeCannoli from "./pages/assorti/GlutenfreeCannoli";
import VeganCannoli from "./pages/assorti/VeganCannoli";

import CannoliSnack from "./pages/cannoli/CannoliSnack";
import CannoliGlutenFree from "./pages/cannoli/CannoliGlutenFree";
import CannoliVegan from "./pages/cannoli/CannoliVegan";

import Counter from "./components/counter/Counter";
import Giftbox from "./pages/giftbox/Giftbox";
import Service from "./pages/service/Service";

import Franchise from "./pages/franchise/Franchise";
import FranchiseInformation from "./pages/franchise/FranchiseInformation";
import Contact from "./pages/contact/Contact";

import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import UserProfile from "./pages/userProfile/UserProfile";

import Wholesale from "./pages/wholesale/Wholesale";

import { Cart } from "./components/cart/Cart";
import CartDeliveryRequest from "./components/cartDeliveryRequest/CartDeliveryRequest";
import CartPage from "./components/cartPage/CartPage";

import Admin_WholesaleEditComponent from "./components/admin/Admin_WholesaleEditComponent";
import Admin_WholesaleComponent from "./components/admin/Admin_WholesaleComponent";
import Admin_UserComponent from "./components/admin/Admin_UserComponent";

import ImageCannoliComponent from "./components/imageUploaden/ImageCannoliComponent";
import UserForm from "./components/userForm/UserForm";
import OrderListComponent from "./components/order/OrderListComponent";
import OrderList from "./pages/orderList/OrderList";

import FourZeroFour from "./pages/404/FourZeroFour";

import headerImg from "./assets/img.header/homepage-background-2400.jpg";
import "./App.css";

/* ---------------- Helpers ---------------------- */

// Scrolt naar boven bij routewissel – rendert niets
function ScrollToTop() {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

// Layout met Header + Footer rondom de content (Outlet)
function DefaultLayout({ headerImage, pageTitle }) {
    return (
        <div className="container">
            <div className="inner-container__reusable default-text-restrict">
                <Header headerImage={headerImage} pageTitle={pageTitle} />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

/* ---------------- App ---------------------- */

function App() {
    const [headerImage, setHeaderImage] = useState(headerImg);
    const [pageTitle, setPageTitle] = useState();

    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route element={ <DefaultLayout headerImage={headerImage} pageTitle={pageTitle} /> }>

                    <Route path="/"
                       element={ <HomePage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/cannoli"
                       element={ <Cannolis headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/cannoli-assorti"
                       element={ <CannoliAssorti headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/snack-cannoli/assorti"
                       element={ <SnackCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/glutenfree-cannoli/assorti"
                       element={ <GlutenfreeCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/vegan-cannoli/assorti"
                       element={ <VeganCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/cannolisnack"
                       element={ <CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/cannoliglutenfree"
                       element={ <CannoliGlutenFree headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/cannolivegan"
                       element={ <CannoliVegan headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/counter"
                       element={ <Counter headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/giftbox"
                       element={ <Giftbox headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/service"
                       element={ <Service headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/franchise"
                       element={ <Franchise headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/franchise-information"
                       element={ <FranchiseInformation headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/contact"
                       element={ <Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/login"
                       element={ <SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/register"
                       element={ <SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/wholesale/:id"
                       element={ <Wholesale headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/profile"
                       element={ <PrivateRoute><UserProfile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/cannolis-add"
                       element={ <PrivateRoute><Admin_WholesaleComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/user-view"
                       element={ <PrivateRoute> <Admin_UserComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/checkout"
                       element={ <PrivateRoute><Cart headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/cart-instruction"
                       element={ <PrivateRoute><CartPage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/cart-instruction/checkout"
                       element={ <PrivateRoute><CartDeliveryRequest headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/deliveryRequests"
                       element={ <PrivateRoute><OrderList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/deliveryRequests/:deliveryRequest_id"
                       element={ <PrivateRoute><OrderListComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/userform/:user_id"
                       element={ <PrivateRoute><UserForm headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute> }/>

                    <Route path="/cannolis/image/:cannoli_id"
                       element={ <ImageCannoliComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>

                    <Route path="/cannolis/info/:cannoli_id"
                       element={ <Admin_WholesaleEditComponent headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/> }/>
                </Route>

                <Route path="/404"
                       element={<FourZeroFour />} />
                <Route path="*"
                       element={<FourZeroFour />} />
            </Routes>
        </>
    );
}

export default App;
