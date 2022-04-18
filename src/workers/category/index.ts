import {takeEvery, fork, take} from "redux-saga/effects";
import {CategoryActionsType} from "../../store/reducers/category/action-types";
import {createCategory} from "./createCategory";
import {setCategories} from "./setCategories";
import {LOCATION_CHANGE} from "connected-react-router";
import {deleteCategory} from "./deleteCategory";


export function* Category() {
    yield takeEvery(CategoryActionsType.START_NEW_CATEGORY_CREATION, createCategory)
    yield takeEvery(CategoryActionsType.START_REMOVING_CATEGORY, deleteCategory)
    fork(setCategories)
}