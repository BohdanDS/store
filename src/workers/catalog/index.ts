import {takeEvery} from "redux-saga/effects";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";
import {fetchCatalogItems, getArticleById} from "./fetchCatalogItems";
import {createItem} from "./createItem";

export function* CatalogSaga() {
    yield takeEvery(CatalogActionType.START_LOAD_ARTICLES, fetchCatalogItems)
    yield takeEvery(CatalogActionType.START_LOAD_ITEM_BY_ID, getArticleById)
    yield takeEvery(CatalogActionType.START_CREATE_NEW_ARTICLE, createItem)
}