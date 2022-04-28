import CartAPI from "../../api/cart";
import {put} from "redux-saga/effects";
import {CloseNotification, ShowNotification} from "../../store/reducers/notification/actions";
import {fetchCartItems} from "../../store/reducers/cart/actions";
import {AxiosResponse} from "axios";


export function* removeItemFromCart(payload: any) {
    console.log('payload', payload)
    try {
        yield CartAPI.removeItemFromCart(payload.itemId)
        const {data}: AxiosResponse = yield CartAPI.getCartItems()
        yield put(fetchCartItems(data.products))
        yield put(ShowNotification({
            notificationType: "success",
            message: "Items was removed from cart",
            description: ``
        }))
        yield put(CloseNotification())
    } catch (e: any) {
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}