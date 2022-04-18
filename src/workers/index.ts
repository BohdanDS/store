import {all, fork} from 'redux-saga/effects';
import {Authorization} from "./auth";
import {setCategories} from "./category/setCategories";
import {Category} from "./category";
import {CatalogSaga} from "./catalog";


export default function* rootSaga() {
    yield all([
        fork(CatalogSaga),
        fork(Authorization),
        fork(setCategories),
        fork(Category),
    ])
}

