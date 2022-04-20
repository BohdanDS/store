import {CatalogActionType} from "./actions-types";
import {InferValueTypes} from "../../../models/common";
import * as actions from "./actions";
import {IItem} from "../../../models/catalogItems";

export type CommentType = {
    author: string,
    textComment: string
}

export type ItemType = {
    'uploadedImages': any,
    "id": string
    "title": string
    "description": string
    "cost": number
    "available": boolean
    "added_date": string
    "maker": string
    "category": string[],
    "subcategory": string
    'rating': number,
    comment: {
        [commendId: string]: CommentType
    }
}

export type TCatalogState = {
    items: IItem[],
    pageSize: number,
    totalCount: number | undefined
    currentPage: number
}

const initialState: TCatalogState = {
    items: [],
    pageSize: 5,
    totalCount: undefined,
    currentPage: 1
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state: TCatalogState = initialState, action: ActionTypes): TCatalogState {
    switch (action.type) {
        case CatalogActionType.LOAD_ARTICLES_SUCCESS: {

            return {
                ...state,
                items: [...action.articles],
                totalCount: action.totalCount,
                currentPage: action.page
            }
        }
        case CatalogActionType.LOAD_ITEM_BY_ID_SUCCESS: {
            return {...state, items: [...state.items, action.article]}
        }
        // case CatalogActionType.CREATE_NEW_ARTICLE_SUCCESS: {
        //     return {...state, items: [...state.items, action.article]}
        // }
        default:
            return state
    }
}