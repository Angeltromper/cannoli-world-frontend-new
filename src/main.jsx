import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.jsx';
import CannoliContextProvider from './context/CannoliContext.jsx';
import {CartProvider} from "./context/CartContext.jsx";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



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
