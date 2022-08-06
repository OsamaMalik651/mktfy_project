import axios from "../utils/axios-helper";

//Get all the FAQS
const getFaqs = async () => {
    try {
        const response = await axios.get('/faq');
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export { getFaqs };