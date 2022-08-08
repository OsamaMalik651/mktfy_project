import axios from "../utils/axios-helper";

//Upload images
const uploadImages = async (images) => {
    try {
        const response = await axios.post("/upload", images);
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export { uploadImages };