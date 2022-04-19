import {AxiosResponse} from "axios";
import CartAPI from "../../api/cart";
import {put} from "redux-saga/effects";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {AddItemToCard} from "../../store/reducers/cart/actions";

export function* addItemToCart(payload: ReturnType<typeof AddItemToCard>) {
    console.log(payload)
    try {
        const {data}: AxiosResponse = yield CartAPI.addItemToCart(payload.itemId)
        console.log(data)
        yield put(AddItemToCard(payload.itemId))
        yield put(ShowNotification({
            notificationType: "success",
            message: "Items Added to Cart",
            description: ``
        }))
    } catch (e: any) {
        console.log('Here', e)
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}