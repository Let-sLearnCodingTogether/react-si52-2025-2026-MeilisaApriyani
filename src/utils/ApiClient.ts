import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Accept": "application/json"
    }
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("AuthToken");
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;