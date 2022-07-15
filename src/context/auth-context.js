import { createContext, useEffect } from "react";
import auth0js from "auth0-js";
import jwt_decode from "jwt-decode";
import { useState } from "react";
const { REACT_APP_DOMAIN, REACT_APP_CLIENTID, REACT_APP_AUDIENCE } = process.env

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false)

    // configure Auth0
    const webAuth = new auth0js.WebAuth({
        domain: REACT_APP_DOMAIN,
        clientID: REACT_APP_CLIENTID,
        audience: REACT_APP_AUDIENCE,
    })

    //On first page load, check whether access-token is present 
    useEffect(() => {
        let access_token = new URLSearchParams(
            document.location.hash.substring(1)).get("access_token")
        let decode;
        if (access_token) {
            sessionStorage.setItem("access_token", access_token);
            decode = jwt_decode(access_token);
            // console.log("decode", decode);
            setAuthenticated(true)
        }
    }, [])

    const login = (email, password) => {
        webAuth.login(
            {
                responseType: "token",
                realm: "Username-Password-Authentication",
                // email: "osama.malik013+test1@gmail.com",
                // password: "Test@11223334",
                email: email,
                password: password,
                redirectUri: "http://localhost:3000/",
            },
            function (error) {
                console.log(error)
            }
        )
    }

    const logout = () => {
        setAuthenticated(false)
        sessionStorage.removeItem("access_token")
        webAuth.logout({ returnTo: "http://localhost:3000/" })
    }
    return (
        <AuthContext.Provider value={{ login, authenticated, logout }}>
            {children}
        </AuthContext.Provider>
    )
}