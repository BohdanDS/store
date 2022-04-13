import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5005/api/'
})

export const AuthAPI = {
    login(email: string, password: string) {
        return instance.post('/auth/login', {email: email, password: password})
    },
    logOut(){
        return instance.get('auth/logout')
    }
}