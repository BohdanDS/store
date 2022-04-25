import {CatalogActionType} from "./actions-types";
import {InferValueTypes} from "../../../models/common";
import * as actions from "./actions";
import {IItem} from "../../../models/catalogItems";
import {ICategory, TCategory} from "../../../models/category";

export type CommentType = {
    author: string,
    textComment: string
}

export type FilterDataType = typeof initialState.filterData

export type TCatalogState = {
    items: IItem[],
    pageSize: number,
    totalCount: number | undefined
    currentPage: number
    filterData: {
        searchString?: string | null
        category?: number[] | null,
        price?: [number, number]
    }
}

const initialState: TCatalogState = {
    items: [],
    pageSize: 5,
    totalCount: undefined,
    currentPage: 1,
    filterData: {
        searchString: null,
        category: null,
        // price: [0, 9999]
    }
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>


export default function reducer(state: TCatalogState = initialState, action: ActionTypes): TCatalogState {
    switch (action.type) {
        case CatalogActionType.LOAD_ARTICLES_SUCCESS: {
            return {
                ...state,
                items: action.articles,
                totalCount: action.totalCount,
                currentPage: action.page
            }
        }
        case CatalogActionType.LOAD_ITEM_BY_ID_SUCCESS: {
            return {...state, items: [...state.items, action.article]}
        }
        case CatalogActionType.ADD_CATEGORY_FILTER_VALUE: {
            return {
                ...state,
                filterData: {...state.filterData, category: action.categoriesId.length ? action.categoriesId : null}
            }
        }
        case CatalogActionType.ADD_SEARCH_STRING_FILTER_VALUE: {
            return {
                ...state,
                filterData: {...state.filterData, searchString: action.searchString.length ? action.searchString : null}
            }
        }
        case CatalogActionType.ADD_PRICE_FILTER_VALUE: {
            return {
                ...state, filterData: {...state.filterData, price: [...action.prices]}
            }
        }
        default:
            return state
    }
}