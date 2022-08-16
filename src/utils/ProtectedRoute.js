import React, { useEffect } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

const ProtectedRoute = ({ children, ...rest }) => {
    const { loading, authenticated, logout } = useContext(AuthContext);


    if (loading) {
        return <Spin style={{ width: "100vw", height: "100vh", paddingTop: "45vh", textAlign: "center", background: "rgba(0, 0, 0, 0.7)", borderRadius: "4px", position: "fixed", zIndex: "9999" }} />;
    }
    if (!authenticated) {
        logout()
    }
    return children;

}

export default ProtectedRoute