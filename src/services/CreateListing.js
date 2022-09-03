import axios from "../utils/axios-helper";

const token = sessionStorage.getItem("access_token");
const imageUploadHeader = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
    },
};

//Upload images
const uploadImages = async (images) => {
    try {
        let Images = []
        images.forEach(image => Images.push(axios.post("/upload", image, imageUploadHeader)));
        return Promise.all(Images)
            .then((ids) => {
                const imageIds = ids.map(image => image[0].id)
                return imageIds
            })
            .catch((error) => {
                console.log(error)
            }
            )
    } catch (error) {
        console.log(error)
    }
}

//Create listing
const createListing = async (listing) => {
    try {
        const response = await axios.post("/Listing", listing);
        return response
    } catch (error) {
        console.log(error)
    }
}
export { uploadImages, createListing };