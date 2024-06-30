import axios from "axios";

let refresh = false;

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401 && !refresh) {
            refresh = true;
            try {
                console.log(localStorage.getItem('refresh_token'));
                const response = await axios.post(
                    'http://localhost:8000/token/refresh/',
                    { refresh: localStorage.getItem('refresh_token') },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    }
                );
                
                if (response.status === 200) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);
                    
                    // Retry the original request with new access token
                    error.config.headers['Authorization'] = `Bearer ${response.data.access}`;
                    return axios(error.config);
                }
            } catch (e) {
                console.error('Failed to refresh token', e);
            } finally {
                refresh = false;
            }
        }
        
        refresh = false;
        return Promise.reject(error);
    }
);
