import {InferValueTypes} from "../../../models/common";
import * as actions from './actions'
import {CategoryActionsType} from "./action-types";
import {v4 as uuidv4} from 'uuid';

const initialState: CategoryType = {
    '1':'Weapon',
    '2':'Food',
    '3':'Drugs',
    '4':'Alcohol',
}

export type CategoryType = {
    [id: string]: string
}

type ActionType = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionType): CategoryType {
    switch (action.type) {
        case CategoryActionsType.CREATE_NEW_CATEGORY: {
            return {...state, [uuidv4()]: action.categoryName}
        }
        case CategoryActionsType.UPDATE_CATEGORY: {
            return {...state, [action.categoryId]: action.categoryTitle}
        }
        case CategoryActionsType.REMOVE_CATEGORY: {
            delete state[action.categoryId]
            return {...state}
        }
        default:
            return state
    }
}

