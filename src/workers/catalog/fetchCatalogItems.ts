import {AxiosResponse} from "axios";
import CatalogAPI from "../../api/catalog";
import {put} from "redux-saga/effects";
import {fetchArticles} from "../../store/reducers/catalog/actions";

export function* fetchCatalogItems(payload: any) {
    try {
        const {data}: AxiosResponse = yield CatalogAPI.getItems(payload.page)
        yield put(fetchArticles(data.content, data.totalCount, data.page+1))
    } catch (e) {
        console.log(e)
    }
}