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
    try {
        const response = await axios.post("/Listing", listing);
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}
export { uploadImages, createListing };