import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL

const service = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

service.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("access_token");
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (error) => {
        console.log(error);
        Promise.reject(error);
    }
);

export default service