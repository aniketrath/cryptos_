import axios from "axios";

export const GetTopPerformers = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/get_stats/get_performance_data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const GetCoinsList = async () => {
    try { 
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetchdata/getdata`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const GetPopularCoins = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/get_stats/get_popular_coins`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const result = await ShiftData();
//         setFirstShiftData(result["Shift 1"]);
//         setSecondShiftData(result["Shift 2"]);
//       } catch (error) {
//         console.error("Error fetching data in MyComponent:", error);
//       }
//     };
//     fetchDataFromApi();
//     const intervalId = setInterval(fetchDataFromApi, 100);
//     return () => clearInterval(intervalId);
//   }, []);