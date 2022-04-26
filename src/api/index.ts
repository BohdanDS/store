import axios, {AxiosRequestConfig} from 'axios'

export const API_URL = 'http://localhost:5005/api/'

export const API = axios.create({
	baseURL: API_URL,
	withCredentials: true
})

export const API_Auth = axios.create(({
	baseURL: API_URL,
	withCredentials: true
}))


API_Auth.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})