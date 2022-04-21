import {AxiosResponse} from "axios";
import CatalogAPI from "../../api/catalog";
import {put, select} from "redux-saga/effects";
import {fetchArticles, setArticleById, StartFetchArticles} from "../../store/reducers/catalog/actions";
import {SelectFilterData, SelectPageSize} from "../../store/reducers/catalog/selectors";
import {FilterDataType} from "../../store/reducers/catalog";

export function* fetchCatalogItems(payload: ReturnType<typeof StartFetchArticles>) {
    let {page, pageSize} = payload
    pageSize = pageSize ? pageSize : yield select(SelectPageSize())
    const filterDataS: FilterDataType = yield select(SelectFilterData())
    console.log('filterDataS', filterDataS)
    try {
        const {data}: AxiosResponse = yield CatalogAPI.getItems(page, pageSize, filterDataS)
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