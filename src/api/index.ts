import axios, {AxiosRequestConfig} from 'axios'

export const API_URL = 'http://localhost:5005/api/'

export const API = axios.create({
    baseURL: API_URL
})

export const API_Auth = axios.create(({
    baseURL: API_URL,
    withCredentials: true
}))


API_Auth.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
//
//
// API_Auth.interceptors.response.use((config) => {
//     return config
// }, (async (error) => {
//     const originalRequest = error.config
//     if (error.response.status === 1001 && error.config && !error.config._isRetry) {
//         error.config._isRetry = true
//         try {
//             //    Запрос на получение нового access token to refresh API
//             //    Засетать его в localStorage
//             return API_Auth.request(originalRequest) // Повтор запроса
//         } catch (e) {
//             console.log('Not Authorized')
//         }
//     }
// }))