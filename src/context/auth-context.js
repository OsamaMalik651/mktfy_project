import { createContext, useEffect } from "react";
import auth0js from "auth0-js";
import jwt_decode from "jwt-decode";
import { useState } from "react";
const { REACT_APP_DOMAIN, REACT_APP_CLIENTID, REACT_APP_AUDIENCE } = process.env

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false)
    const [singUpCompleted, setSignUpCompleted] = useState(false)
    const [error, setError] = useState({ title: "", description: "" })
    const [showError, setShowError] = useState(false)

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
            setAuthenticated(true)
        }
    }, [])

    const login = (email, password) => {
        webAuth.login(
            {
                responseType: "token",
                realm: "Username-Password-Authentication",
                email: email,
                password: password,
                redirectUri: "http://localhost:3000/",
            },
            function (error) {
                console.log(error)
                setError({ title: error.code, description: error.description })
                setShowError(true)
            }
        )
    }

    const logout = () => {
        setAuthenticated(false)
        sessionStorage.removeItem("access_token")
        webAuth.logout({ returnTo: "http://localhost:3000/" })
    }

    const signUp = (userDetails) => {
        const { firstName, lastName, city, email, address, phone, password } = userDetails
        webAuth.signup(
            {
                connection: "Username-Password-Authentication",
                email: email,
                password: password,
                username: firstName + "_" + lastName,
                given_name: firstName,
                family_name: lastName,
                name: firstName + "_" + lastName,
            },
            async function (error, res) {
                if (error) {
                    console.log(error)
                    setError({ title: error.code, description: error.description })
                    setShowError(true)
                } else {
                    console.log(res)
                    const userDetails = {
                        firstName, lastName, email, city, address, phone
                    }

                    sessionStorage.setItem("userDetails", JSON.stringify(userDetails))
                    login(email, password)
                    setSignUpCompleted(true)

                }
            }
        );
    }
    return (
        <AuthContext.Provider value={{ login, authenticated, logout, signUp, singUpCompleted, error, setError, showError, setShowError }}>
            {children}
        </AuthContext.Provider>
    )
}