import {fork, takeEvery, takeLatest} from "redux-saga/effects";
import {CardActionsType} from "../../store/reducers/cart/action-types";
import {addItemToCart} from "./addItemToCart";
import {removeItemFromCart} from "./removeItemFromCart";
import {getCartItems} from "./getCartItems";

export function* Cart() {
    yield takeEvery(CardActionsType.START_ADDING_ITEM_TO_CARD, addItemToCart)
    yield takeEvery(CardActionsType.START_REMOVING_ITEM_FROM_CARD, removeItemFromCart)
    fork(getCartItems)
}