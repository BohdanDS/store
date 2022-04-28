import {API_Auth} from './index';

export default class CartAPI {
	static async addItemToCart(itemId: number) {
		return API_Auth.post('/card/add', {products: [{id: itemId}]});
	}

	static async removeItemFromCart(itemId: number) {
		return API_Auth.post('/card/remove', {products: itemId});
	}

	static async getCartItems() {
		return API_Auth.get('card/');
	}
}
