import CatalogAPI from "../../api/catalog";
import {CreateNewArticle} from "../../store/reducers/catalog/actions";
import {put} from "redux-saga/effects";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";


export function* createItem(payload: ReturnType<typeof CreateNewArticle>) {
    const {type, ...itemData} = payload
    try {
        yield CatalogAPI.createItem(itemData)
        yield put({type: CatalogActionType.START_LOAD_ARTICLES, page: 2})

    } catch (e) {
        console.log(e)
    }

}