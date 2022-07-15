import { createContext } from "react";
import auth0js from "auth0-js";
const { REACT_APP_DOMAIN, REACT_APP_CLIENTID, REACT_APP_AUDIENCE } = process.env

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    // configure Auth0
    console.log(REACT_APP_DOMAIN, REACT_APP_CLIENTID, REACT_APP_AUDIENCE)
    const webAuth = new auth0js.WebAuth({
        domain: process.env.REACT_APP_DOMAIN,
        clientID: process.env.REACT_APP_CLIENTID,
        audience: process.env.REACT_APP_AUDIENCE,

    })
    const login = () => {
        webAuth.login(
            {
                responseType: "token",
                realm: "Username-Password-Authentication",
                email: "osama.malik013+test1@gmail.com",
                password: "Test@11223334",
                redirectUri: "http://localhost:3000/",
            },
            function (error) {
                console.log(error)
            }
        )
    }
    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    )
}