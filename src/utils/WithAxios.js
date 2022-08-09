import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import axios from "./axios-helper";

export default function WithAxios({ children }) {
    const { logout } = useContext(AuthContext);

    React.useMemo(() => {
        axios.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                // console.log("error from axios interceptor", error);
                const originalConfig = error.config;
                if (
                    originalConfig.url !== "/login" &&
                    originalConfig.url !== "/" &&
                    !originalConfig.url.includes("mktfylex.us.auth0.com") &&
                    error.response
                ) {
                    console.log(error.response);
                    // Access token expired
                    if (error.response.status === 401) {
                        console.log("401 error");
                        logout();
                    }
                    if (error.response.status === 400) {
                        console.log(error)
                    }
                    if (error.response.status === 404) {
                        console.log("404 error", error.response.statusText)
                    }
                }
            }
        );
    }, []);
    return children;
}