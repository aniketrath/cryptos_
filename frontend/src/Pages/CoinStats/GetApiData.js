import axios from "axios";

export const GetTrendingActive = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/trending_and_active/get_data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const GetCurrentStats = async (SYMBOL) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/trending_and_active/getcurrentcoin?Symbol=${SYMBOL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}