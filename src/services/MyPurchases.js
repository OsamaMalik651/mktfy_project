import axios from "../utils/axios-helper";

//Get all the listings purchased by the user
const getPurchasedListings = async () => {
    const response = await axios.get("/listing/mypurchase");
    return response;
}

export { getPurchasedListings };