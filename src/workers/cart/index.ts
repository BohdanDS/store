import {fork, takeEvery, takeLatest} from "redux-saga/effects";
import {CardActionsType} from "../../store/reducers/cart/action-types";
import {addItemToCart} from "./addItemToCart";
import {removeItemFromCart} from "./removeItemFromCart";

export function* Cart() {
    yield takeEvery(CardActionsType.ADDING_ITEM_TO_CARD_START, addItemToCart)
    yield takeEvery(CardActionsType.REMOVING_ITEM_FROM_CARD_START, removeItemFromCart)
}