import {takeEvery} from "redux-saga/effects";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";
import {fetchCatalogItems} from "./fetchCatalogItems";

export function* CatalogSaga() {
    yield takeEvery(CatalogActionType.START_LOAD_ARTICLES, fetchCatalogItems)
}