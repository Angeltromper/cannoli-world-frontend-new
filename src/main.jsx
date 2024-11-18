import React from 'react'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from "./context/AuthContext";
import CannoliContextProvider from "./context/CannoliContext";
import {CartProvider} from "./context/CartContext";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <React.StrictMode>
        <Router>

            <AuthContextProvider>
                <CannoliContextProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CannoliContextProvider>
            </AuthContextProvider>

        </Router>
    </React.StrictMode>
);

reportWebVitals();
