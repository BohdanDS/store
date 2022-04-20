import {matchPath} from "react-router-dom";
import {LOCATION_CHANGE, LocationChangeAction} from "connected-react-router";
import {put, take} from "redux-saga/effects";
import {AxiosResponse} from "axios";
import CartAPI from "../../api/cart";
import {fetchCartItems} from "../../store/reducers/cart/actions";
import {ShowNotification} from "../../store/reducers/notification/actions";

export function* getCartItems() {
    while (true) {
        let action: LocationChangeAction = yield take(LOCATION_CHANGE);
        if (matchPath(action.payload.location.pathname, '/cart')) {
            try {
                const {data}: AxiosResponse = yield CartAPI.getCartItems()
                yield put(fetchCartItems(data.products))
            } catch (e:any) {
                yield put(ShowNotification({
                    notificationType: "error",
                    message: "Uuups!",
                    description: e.response.data.message
                }))
            }
        }
    }
}