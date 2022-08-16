import axios from "../utils/axios-helper";

//Get Product by ID
const getProduct = async (id) => {
    const product = await axios.get(`/listing/${id}`);
    return product;
}

//Get product Seller details by ID
const getSeller = async (id) => {
    const seller = await axios.get(`/user/${id}`);
    return seller;
}

export { getProduct, getSeller };