import * as actions from './actions'
import {InferValueTypes} from "../../models/common";
import {CardActionsType} from "./action-types";

const initialState: ItemCardType = {}

export type ItemCardType = {
    [id: string]: number
}

export type InitialStateType = ItemCardType

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): InitialStateType {
    switch (action.type) {
        case CardActionsType.ADD_ITEM_TO_CARD:
            return {...state, [action.itemId]: state[action.itemId] ? ++state[action.itemId] : 1}
        case CardActionsType.DECREASE_ITEM_COUNT: {
            return {...state, [action.itemId]: state[action.itemId] >= 1 ? --state[action.itemId] : 0}
        }
        case CardActionsType.REMOVE_ITEM_FROM_CARD: {
            delete state[action.itemId]
            return {...state}
        }
        default:
            return state
    }
}


