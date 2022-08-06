
//check if user has access token
const checkAccessToken = () => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
        return true;
    }
    return false;
}

export default checkAccessToken;