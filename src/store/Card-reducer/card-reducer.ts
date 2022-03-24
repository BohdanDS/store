import * as actions from './actions'
import {InferValueTypes} from "../../models/common";
import {CardActionsType} from "./action-types";

const initialState: InitialStateType = []

export type ItemType = {
    "id": string
}

export type InitialStateType = ItemType[]

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>


export const cardReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case CardActionsType.REMOVE_ITEM_FROM_CARD: {
            const itemToRemove = state.find(item => item.id === action.itemId)
            console.log(itemToRemove)
            return [
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


