import {CatalogActionType} from './actions-types'
import {CommentType, ItemType} from "./index";

export const CreateNewArticle = (article: ItemType) => ({
    type: CatalogActionType.CREATE_NEW_ARTICLE,
    article,
})

export const AddCommentToArticle = (articleId: string, comment: CommentType) => ({
    type: CatalogActionType.ADD_COMMENT,
    articleId,
    comment,
})