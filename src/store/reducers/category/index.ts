import {InferValueTypes} from "../../../models/common";
import * as actions from './actions'
import {CategoryActionsType} from "./action-types";
import {ICategory} from "../../../models/category";


const initialState: ICategory[] = []

type ActionType = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionType): ICategory[] {
    switch (action.type) {
        case CategoryActionsType.CREATE_NEW_CATEGORY_SUCCESS: {
            return [...state, action.category]
        }
        case CategoryActionsType.REMOVE_CATEGORY_SUCCESS: {
            return [...state.filter(category => category.id !== action.categoryId)]
        }
        case CategoryActionsType.SET_CATEGORIES_SUCCESS: {
            return [...state, ...action.categories]
        }
        default:
            return state
    }
}

