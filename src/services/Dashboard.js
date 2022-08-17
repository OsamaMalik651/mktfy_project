import axios from "../utils/axios-helper";

const categories = ["Cars & Vehicles", "Furniture", "Electronics", "Real Estate"];
//Get 3 listngs from each category and display them in the dashboard
const getDashboardListings = async () => {
    //This function needs to be modified to return images only for the listings that are returned.
    const dashboardListings = await Promise.all(categories.map(async (category) => {
        const listings = await axios.get(`/listing/all/category/${category}`).then(res => res.slice(0, 3));
        return {
            category,
            listings
        }
    }));
    return dashboardListings;
}

//Get all Listings for a specific category
const getListings = async (category) => {
    try {
        const listings = await axios.get(`/listing/all/category/${category}`);
        return listings;
    }
    catch (error) {
        console.log(error);
    }

}

const requestListing = async (id) => {
    try {
        const listing = await axios.put(`/listing/request`, { "id": id });
        return listing;
    }
    catch (error) {
        console.log(error);
    }
}

export { getDashboardListings, getListings, requestListing, categories };