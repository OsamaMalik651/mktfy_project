
//check if user has access token
const checkAccessToken = () => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
        return true;
    }
    return false;
}

// Clear local storage
const clearLocalStorage = () => {
    sessionStorage.removeItem("access_token")
    sessionStorage.removeItem("user")
}
export { checkAccessToken, clearLocalStorage };