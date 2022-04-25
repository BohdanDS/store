import {API} from './index';
import {IUser} from '../models/user';

export default class AuthAPI {
	static async login(email: string, password: string) {
		return API.post<IUser>('/auth/login', {email, password});
	}

	static async logOut() {
		return API.get('auth/logout');
	}

	static async userRegistration(email: string, name: string, password: string) {
		return API.post<IUser>('/auth/registration', {email, name, password});
	}
}
