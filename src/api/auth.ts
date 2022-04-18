import {API} from "./index";

export default class AuthAPI {
    static login(email: string, password: string) {
        return API.post('/auth/login', {email, password})
    }

    static logOut() {
        return API.get('auth/logout')
    }

    static userRegistration(email: string, name: string, password: string) {
        return API.post('/auth/registration', {email, name, password})
    }
}