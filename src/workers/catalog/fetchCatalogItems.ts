import {AxiosResponse} from "axios";
import CatalogAPI from "../../api/catalog";
import {put} from "redux-saga/effects";
import {fetchArticles, setArticleById} from "../../store/reducers/catalog/actions";

export function* fetchCatalogItems(payload: ReturnType<typeof fetchArticles>) {
    try {
        const {data}: AxiosResponse = yield CatalogAPI.getItems(payload.page)
        yield put(fetchArticles(data.content, data.totalCount, data.page + 1))
    } catch (e) {
        console.log(e)
    }
}

export function* getArticleById(payload: any) {
    try {
        const {data}: AxiosResponse = yield CatalogAPI.getItemByID(payload.id)
        yield put(setArticleById(data))
    } catch (e) {
        console.log(e)
    }
}