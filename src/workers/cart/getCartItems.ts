import {matchPath} from "react-router-dom";
import {LOCATION_CHANGE, LocationChangeAction} from "connected-react-router";
import {put, take} from "redux-saga/effects";
import {AxiosResponse} from "axios";
import CartAPI from "../../api/cart";
import {fetchCartItems} from "../../store/reducers/cart/actions";

export function* getCartItems() {
    while (true) {
        console.log('getCartItemsSaga')
        let action: LocationChangeAction = yield take(LOCATION_CHANGE);
        if (matchPath(action.payload.location.pathname, '/cart')) {
            try {
                const {data}: AxiosResponse = yield CartAPI.getCartItems()
                console.log(data)
                yield put(fetchCartItems(data.products))
            } catch (e) {
                console.log(e)
            }
        }
    }
}