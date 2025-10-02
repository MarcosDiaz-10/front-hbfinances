import { CONFIG } from '@/config';
import axios from 'axios';


const apiClientServer = axios.create({
    baseURL: CONFIG.urlApiServer,
    withCredentials: true
})



apiClientServer.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
)

const apiClientFront = axios.create({
    baseURL: CONFIG.urlApiFront,
    withCredentials: true,
})
apiClientFront.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
)

export { apiClientServer, apiClientFront }