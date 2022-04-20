import {StartRemovingArticle} from "../../store/reducers/catalog/actions";
import CatalogAPI from "../../api/catalog";
import {put} from "redux-saga/effects";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {history} from "../../index";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";


export function* deleteItem(payload: ReturnType<typeof StartRemovingArticle>) {
    try {
        yield CatalogAPI.removeItem(payload.itemId)
        yield put({type: CatalogActionType.START_LOAD_ARTICLES, page: 0})
        yield history.push('/')
        yield put(ShowNotification({
            notificationType: "success",
            message: "Item was removed",
            description: ''
        }))
    } catch (e: any) {
        put(ShowNotification({
            notificationType: "error",
            message: "Uuups!",
            description: e.response.data.message
        }))
    }
}