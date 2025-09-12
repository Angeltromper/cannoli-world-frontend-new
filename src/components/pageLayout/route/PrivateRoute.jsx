import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function PrivateRoute({ children }) {
    const { auth } = useContext(AuthContext); // of: const { isAuth } = useContext(AuthContext);
    const location = useLocation();

    const isAuthenticated = !!auth;

    return isAuthenticated
        ? children
        : <Navigate to="/login" replace state={{ from: location }} />;
}

export default PrivateRoute;
