import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
// import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';
import { checkAccessToken } from './storage-helper';
import { Spin } from 'antd';
import 'antd/dist/antd.css';


const ProtectedRoute = ({ children, ...rest }) => {
    const { loading, authenticated, setAuthenticated, logout } = useContext(AuthContext);

    let location = useLocation();

    let accessToken = checkAccessToken();
    React.useEffect(() => {
        if (accessToken) {
            setAuthenticated(true);
        }
        else {
            setAuthenticated(false);
        }
    }, [accessToken]);

    if (loading) {
        return <Spin style={{ width: "100vw", height: "100vh", paddingTop: "45vh", textAlign: "center", background: "rgba(0, 0, 0, 0.7)", borderRadius: "4px", position: "fixed", zIndex: "9999" }} />;
    }
    if (!authenticated) {
        // return <Navigate to="/" state={{ from: location }} replace />;
        logout()
    }
    return children;

}

export default ProtectedRoute