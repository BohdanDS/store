import {takeEvery} from "redux-saga/effects";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";
import {fetchCatalogItems, getArticleById} from "./fetchCatalogItems";
import {createItem} from "./createItem";
import {deleteItem} from "./deleteItem";

export function* CatalogSaga() {
    yield takeEvery(CatalogActionType.LOAD_ARTICLES_START, fetchCatalogItems)
    yield takeEvery(CatalogActionType.LOAD_ITEM_BY_ID_START, getArticleById)
    yield takeEvery(CatalogActionType.CREATE_NEW_ARTICLE_START, createItem)
    yield takeEvery(CatalogActionType.REMOVE_ARTICLE_START, deleteItem)
}