import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://serverforlws.herokuapp.com",
});

export default axiosInstance;
