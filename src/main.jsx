import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import CannoliContextProvider from "./context/CannoliContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import FormContextProvider from "./context/FormContext.jsx";
import ScreenWidthContextProvider from "./context/ScreenWidthContext.jsx";
import reportWebVitals from './reportWebVitals';


import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>

        <Router>
            <AuthContextProvider>
                <CannoliContextProvider>
                    <CartProvider>
                        <FormContextProvider>
                            <ScreenWidthContextProvider>
                            <App/>
                        </ScreenWidthContextProvider>
                        </FormContextProvider>

                    </CartProvider>
                </CannoliContextProvider>
            </AuthContextProvider>
        </Router>

    </React.StrictMode>

);

reportWebVitals();






