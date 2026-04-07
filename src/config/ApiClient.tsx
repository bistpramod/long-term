import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 60000,
    timeoutErrorMessage: "time out happened lol",
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    }


})

export default AxiosInstance;