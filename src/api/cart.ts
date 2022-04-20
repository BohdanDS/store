import {API_Auth} from "./index";

export default class CartAPI {
    static addItemToCart(itemId: number) {
        return API_Auth.post('/card/add', {products: [{id:itemId}]})
    }

    static removeItemFromCart(itemId: number) {
        return API_Auth.post('/card/remove', {products: itemId})
    }
    static getCartItems(){
        return API_Auth.get('card/')
    }
}