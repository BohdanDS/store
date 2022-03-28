import * as actions from './actions'
import {InferValueTypes} from "../../models/common";
import {FilterActionType} from "./action-types";

type InitialStateType = {
    minPrice: number
    maxPrice: number
    producers: Array<string>
    inMarket: boolean,
    searchQuery: string
}
const initialState: InitialStateType = {
    minPrice: 0,
    maxPrice: 100,
    producers: [],
    inMarket: false,
    searchQuery: ''
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>


export default function reducer(state = initialState, action: ActionTypes): InitialStateType {
    switch (action.type) {
        case FilterActionType.SET_MIN_PRICE_VALUE: {
            return {
                ...state, minPrice: action.minValue
            }
        }
        case FilterActionType.SET_MAX_PRICE_VALUE: {
            return {
                ...state, maxPrice: action.maxValue
            }
        }
        case FilterActionType.CHANGE_PRODUCER: {
            return {
                ...state, producers: [...action.producerName]
            }
        }
        case FilterActionType.CHANGE_IN_MARKET_TOGGLE: {
            return {
                ...state, inMarket: action.status
            }
        }
        case FilterActionType.SET_SEARCH_QUERY: {
            return {
                ...state, searchQuery: action.searchQuery
            }
        }
        default:
            return state
    }
}