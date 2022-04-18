import {LOCATION_CHANGE, LocationChangeAction} from "connected-react-router";
import {call, takeEvery, put, apply, take, select, fork} from 'redux-saga/effects';
import {matchPath} from "react-router-dom";
import {AxiosResponse} from "axios";
import {ICategory} from "../../models/category";
import {SetCategories} from "../../store/reducers/category/actions";
import CategoryAPI from "../../api/category";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {CloseModal} from "../../store/reducers/modals/actions";


export function* setCategories() {
    while (true) {
        let action: LocationChangeAction = yield take(LOCATION_CHANGE);
        if (matchPath(action.payload.location.pathname, '/admin')) {
            try {
                const {data}: AxiosResponse<ICategory[]> = yield CategoryAPI.getCategories()
                yield put(SetCategories(data))
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