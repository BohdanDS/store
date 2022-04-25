import * as actions from './actions'
import {InferValueTypes} from "../../../models/common";
import {CardActionsType} from "./action-types";

const initialState: TCartState = {
    itemsLocal: {},
    products: []
}

export type ItemsLocalType = typeof initialState.itemsLocal
export type cartProduct = {
    "id": number,
    "title": string,
    "img": null | string,
    "price": number
}

export type TCartState = {
    itemsLocal: {
        [id: number]: number
    }
    products: cartProduct[]
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): TCartState {
    switch (action.type) {
        case CardActionsType.ADD_ITEM_TO_CARD_SUCCESS:
            return {
                ...state,
                itemsLocal: {
                    ...state.itemsLocal,
                    [action.itemId]: state.itemsLocal[action.itemId] ? ++state.itemsLocal[action.itemId] : 1
                }
            }
        case CardActionsType.DECREASE_ITEM_COUNT: {
            return {
                ...state,
                itemsLocal: {
                    ...state.itemsLocal,
                    [action.itemId]: state.itemsLocal[action.itemId] >= 1 ? --state.itemsLocal[action.itemId] : 0
                }
            }
        }
        case CardActionsType.REMOVE_ITEM_FROM_CARD_SUCCESS: {
            // @ts-ignore
            delete state.itemsLocal[action.itemId]
            return {...state, products: state.products.filter(item => item.id !== action.itemId)}
        }
        case CardActionsType.RESET_CART: {
            return {...state, itemsLocal: {}, products: []}
        }
        case CardActionsType.FETCHING_ITEMS_SUCCESS: {
            return {
                ...state,
                products: [...action.items],
                itemsLocal: {...action.items.map(item => item.id).reduce((a, itemId) => ({...a, [itemId]: 1}), {})}
            }
        }
        default:
            return state
    }
}


