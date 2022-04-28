import {takeEvery, fork, take} from "redux-saga/effects";
import {CategoryActionsType} from "../../store/reducers/category/action-types";
import {createCategory} from "./createCategory";
import {getCategories, setCategories} from "./setCategories";
import {deleteCategory} from "./deleteCategory";


export function* Category() {
    yield takeEvery(CategoryActionsType.START_NEW_CATEGORY_CREATION, createCategory)
    yield takeEvery(CategoryActionsType.START_REMOVING_CATEGORY, deleteCategory)
    yield takeEvery(CategoryActionsType.START_FETCHING_CATEGORIES, getCategories)
    fork(setCategories)
}