import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.jsx';
import CannoliContextProvider from './context/CannoliContext.jsx';
import {CartProvider} from "./context/CartContext.jsx";
import FormContextProvider from "./context/FormContext.jsx";

import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <CannoliContextProvider>
                    <CartProvider>
                        <FormContextProvider>
                            <App />
                        </FormContextProvider>
                    </CartProvider>
                </CannoliContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,

)
