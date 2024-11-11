import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.jsx';
import CannoliContextProvider from './context/CannoliContext.jsx';
import {CartProvider} from "./context/CartContext.jsx";
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <React.StrictMode>

            <AuthContextProvider>
                <CannoliContextProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CannoliContextProvider>
            </AuthContextProvider>

    </React.StrictMode>
</Router>
);
