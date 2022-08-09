import { createContext, useEffect } from "react";
import auth0js from "auth0-js";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import axios from "../utils/axios-helper"
const { REACT_APP_DOMAIN, REACT_APP_CLIENTID, REACT_APP_AUDIENCE } = process.env

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false)
    const [singUpCompleted, setSignUpCompleted] = useState(false)
    const [error, setError] = useState({ title: "", description: "" })
    const [showError, setShowError] = useState(false)
    const [user, setUser] = useState(sessionStorage.getItem("user") || {});

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
        if (access_token) {
            sessionStorage.setItem("access_token", access_token);
            setAuthenticated(true)
            webAuth.client.userInfo(access_token, (error, user) => {

                if (error) return console.log(error)

                let newUserDetails = JSON.parse(sessionStorage.getItem("userDetails"))
                if (newUserDetails) {
                    //create user in backend
                    createUser(user.sub, newUserDetails)
                } else {
                    //retrive user details from backend
                    getUserInfo(user.sub)
                }
            })
        }
    }, [])

    // Save user to session storage
    useEffect(() => {
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user))
        }
    }, [user])
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
        sessionStorage.removeItem("user")
        webAuth.logout({ returnTo: "http://localhost:3000/" })
    }

    const signUp = (userDetails) => {
        const { firstName, lastName, city, email, address, phone, password } = userDetails
        webAuth.signup(
            {
                connection: "Username-Password-Authentication",
                email: email,
                password: password,
                username: firstName + " " + lastName,
                given_name: firstName,
                family_name: lastName,
                name: firstName + " " + lastName,
            },
            async function (error, res) {
                if (error) {
                    setError({ title: error.code, description: error.description })
                    setShowError(true)
                }
                else {
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

    //Create user at the backend
    const createUser = async (sub, userDetails) => {

        const data = { ...userDetails, id: sub }

        try {
            const res = await axios.post("/User", data);
            sessionStorage.removeItem("userDetails")
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    //Get User info
    const getUserInfo = async (id) => {
        try {
            const user = await axios.get(`/User/${id}`);
            setUser(user.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AuthContext.Provider value={{ login, authenticated, setAuthenticated, logout, signUp, singUpCompleted, user, error, setError, showError, setShowError }}>
            {children}
        </AuthContext.Provider>
    )
}