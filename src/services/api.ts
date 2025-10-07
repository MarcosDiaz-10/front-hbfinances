import { CONFIG } from '@/config';
import useAuthStore from '@/store/authStore';
import axios from 'axios';


const apiClientServer = axios.create({
    baseURL: CONFIG.urlApi,
    withCredentials: true
})



apiClientServer.interceptors.response.use(
    (response) => {

        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                await apiClientServer.post('/auth/refresh')
                return apiClientServer(originalRequest)
            } catch (error) {
                await apiClientServer.post('/auth/logout')
                useAuthStore.getState().actions.clearUser()

                return Promise.reject(error);
            }

        }

        return Promise.reject(error);

    }
)

export { apiClientServer }