
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:10023/auth",
    timeout: 1000
    
})

export default axiosInstance;