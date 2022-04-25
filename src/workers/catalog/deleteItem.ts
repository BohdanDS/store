import {StartFetchArticles, StartRemovingArticle} from "../../store/reducers/catalog/actions";
import CatalogAPI from "../../api/catalog";
import {put} from "redux-saga/effects";
import {ShowNotification} from "../../store/reducers/notification/actions";
import {history} from "../../index";
import {PUBLIC_PATHS} from "../../routing/paths";


export function* deleteItem(payload: ReturnType<typeof StartRemovingArticle>) {
	try {
		yield CatalogAPI.removeItem(payload.itemId)
		yield put(StartFetchArticles())
		yield history.push(PUBLIC_PATHS.APP)
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