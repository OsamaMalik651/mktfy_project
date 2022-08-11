import axios from "../utils/axios-helper";

//Upload images
const uploadImages = async (images) => {
    try {
        const response = await axios.post("/upload", images);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//Create listing
const createListing = async (listing) => {
    console.log(listing)
    try {
        const response = await axios.post("/Listing", listing);
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export { uploadImages, createListing };