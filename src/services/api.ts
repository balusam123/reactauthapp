import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:7071/api", // Replace with your Azure Function API URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
