import {takeEvery} from "redux-saga/effects";
import {CardActionsType} from "../../store/reducers/cart/action-types";
import {addItemToCart} from "./addItemToCart";

export function* Cart (){
    yield takeEvery(CardActionsType.START_ADDING_ITEM_TO_CARD, addItemToCart)
}