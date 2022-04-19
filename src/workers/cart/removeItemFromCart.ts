import {AxiosResponse} from "axios";
import CartAPI from "../../api/cart";
import {put} from "redux-saga/effects";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {RemoveItemFromCard} from "../../store/reducers/cart/actions";

export function* removeItemFromCart(payload: any) {
    console.log('payload', payload)
    try {
        yield CartAPI.removeItemToCart(payload.itemId)
        // yield put(ShowNotification({
        //     notificationType: "success",
        //     message: "Items was removed from cart",
        //     description: ``
        // }))
    } catch (e: any) {
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}