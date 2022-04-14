import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5005/api/'
})

export const AuthAPI = {
    login(email: string, password: string) {
        return instance.post('/auth/login', {email, password})
    },
    logOut() {
        return instance.get('auth/logout')
    },
    userRegistration(email: string, name: string, password: string) {
        return instance.post('/auth/registration', {email, name,password})
    }
}