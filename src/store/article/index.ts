import {IArticle} from "../../models/interfaces";
import {InferValueTypes} from "../../models/common";
import * as actions from "./actions";
import {ArticleActionType} from "./action-types";

const initialState = {}

type InitialStateType = {
    [articleId: string]: IArticle
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state = initialState, action: ActionTypes): InitialStateType {
    switch (action.type) {
        case ArticleActionType.CREATE_NEW_ARTICLE: {
            return state
        }
        default:
            return state
    }
}