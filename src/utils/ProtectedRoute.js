import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
// import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';
import checkAccessToken from './storage-helper';

const ProtectedRoute = ({ children, ...rest }) => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);

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
    if (!authenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
    // <Route {...rest} render={({ location }) => {
    //     return authenticated === true
    //         ? children
    //         : <Navigate to={{
    //             pathname: '/login',
    //             state: { from: location }
    //         }} />
    // }} />
}

export default ProtectedRoute