export {}
// import {IArticle} from "../../models/interfaces";
// import {InferValueTypes} from "../../models/common";
// import * as actions from "./actions";
// import {ArticleActionType} from "./action-types";
//
// const initialState = {}
//
// type InitialStateType = {
//     [articleId: string]: IArticle
// }
//
// type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
//
// export default function reducer(state = initialState, action: ActionTypes): InitialStateType {
//     switch (action.type) {
//         case ArticleActionType.CREATE_NEW_ARTICLE: {
//             console.log('Action', action)
//             return {...state, [action.payload.id]: action.payload}
//         }
//         default:
//             return state
//     }
// }