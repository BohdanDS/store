import CatalogAPI from "../../api/catalog";
import {CreateNewArticle, StartFetchArticles} from "../../store/reducers/catalog/actions";
import {put} from "redux-saga/effects";


export function* createItem(payload: ReturnType<typeof CreateNewArticle>) {
	const {type, ...itemData} = payload
	try {
		yield CatalogAPI.createItem(itemData)
		yield put(StartFetchArticles())

	} catch (e) {
		console.log(e)
	}

}