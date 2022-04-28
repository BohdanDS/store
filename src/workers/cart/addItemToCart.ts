import {AxiosResponse} from "axios";
import CartAPI from "../../api/cart";
import {put} from "redux-saga/effects";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {AddItemToCard} from "../../store/reducers/cart/actions";

export function* addItemToCart(payload: ReturnType<typeof AddItemToCard>) {
    try {
        const {data}: AxiosResponse = yield CartAPI.addItemToCart(payload.itemId)

        yield put(AddItemToCard(payload.itemId))
        // yield put(ShowNotification({
        //     notificationType: "success",
        //     message: "Items Added to Cart",
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