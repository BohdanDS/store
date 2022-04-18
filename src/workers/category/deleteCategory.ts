import {AxiosResponse} from "axios";
import CategoryAPI from "../../api/category";
import {put} from "redux-saga/effects";
import {RemoveCategory} from "../../store/reducers/category/actions";
import {CloseNotification, ShowNotification} from "../../store/reducers/notification/actions";
import {CloseModal} from "../../store/reducers/modals/actions";

export function* deleteCategory(payload: any) {
    try {
        const {data}: AxiosResponse = yield CategoryAPI.deleteCategory(payload.categoryId)

        yield put(RemoveCategory(data.id))
        yield put(ShowNotification({
            notificationType: "success",
            message: "Category was removed!",
            description: ``
        }))
    } catch (e:any) {
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}