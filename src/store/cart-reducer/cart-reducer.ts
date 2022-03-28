import * as actions from './actions'
import {InferValueTypes} from "../../models/common";
import {CardActionsType} from "./action-types";

const initialState: InitialStateType = []

export type ItemCardType = {
    'id': string
}

export type InitialStateType = Array<ItemCardType>

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>


export const cartReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case CardActionsType.REMOVE_ITEM_FROM_CARD: {
            const stateCopy = state.filter((item) => item.id !== action.itemId)
            return [
                ...stateCopy,
            ]
        }
        case CardActionsType.ADD_ITEM_TO_CARD:
            return [
                ...state, {id: action.itemId}
            ]
        default:
            return state
    }
}


