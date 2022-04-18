import {all, fork} from 'redux-saga/effects';
import {Authorization} from "./auth";
import {setCategories} from "./category/setCategories";
import {Category} from "./category";


export default function* rootSaga() {
    yield all([
        fork(Authorization),
        fork(setCategories),
        fork(Category)
    ])
}

