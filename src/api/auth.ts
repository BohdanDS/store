import {API} from './index';
import {IUser} from '../models/user';
import axios from "axios";

export default class AuthAPI {
	static async login(email: string, password: string) {
		return axios.post<IUser>('http://localhost:5005/api/auth/login', {email, password});
	}

	static async logOut() {
		return API.get('auth/logout');
	}

	static async userRegistration(email: string, name: string, password: string) {
		return API.post<IUser>('/auth/registration', {email, name, password});
	}
}
