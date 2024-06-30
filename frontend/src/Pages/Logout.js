import React, { useEffect } from "react";
import axios from "axios";

export const Logout = () => {
    useEffect(() => {
        const logout = async () => {
            try {
                const { data } = await axios.post(
                    `${process.env.REACT_APP_API_URL}/logout/`,
                    {
                        refresh_token: localStorage.getItem('refresh_token')
                    },
                    {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                            'Content-Type': 'application/json',
                            'accept': 'application/json'
                        },
                        withCredentials: true
                    }
                );
                // Clear local storage on successful logout
                localStorage.clear();
                // Remove Authorization header
                delete axios.defaults.headers.common['Authorization'];
                console.log(data);
                // Redirect to the login page
                window.location.href = '/login';
            } catch (error) {
                console.log('Logout not working:', error);
            }
        };
        logout();
    }, []);
    return (
        <div>logging out</div>
    );
};
export default Logout