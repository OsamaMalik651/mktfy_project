import axios from "../utils/axios-helper";

//Get all the FAQS
const getFaqs = async () => {
    const response = await axios.get('/faq');
    return response

}


export { getFaqs };