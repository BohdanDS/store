import {AxiosResponse} from "axios";
import CategoryAPI from "../../api/category";
import {put} from "redux-saga/effects";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {ICategory} from "../../models/category";
import {CreateNewCategory, StartCreatingNewCategory} from "../../store/reducers/category/actions";


export function* createCategory(payload: ReturnType<typeof StartCreatingNewCategory>) {
    console.log(payload)
    try {
        const {data}: AxiosResponse<ICategory> = yield CategoryAPI.createCategory(payload.title)
        console.log(data)
        yield put(CreateNewCategory(data))
        yield put(ShowNotification({
            notificationType: "success",
            message: "Category was created!",
            description: `New category ${payload.title} was created`
        }))
    } catch (e: any) {
        yield put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}