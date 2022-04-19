import {CatalogActionType} from './actions-types'
import {CommentType} from "./index";
import {IItem} from "../../../models/catalogItems";


export const fetchArticles = (articles: IItem[], totalCount: number, currentPage: number) => ({
    type: CatalogActionType.LOAD_ARTICLES_SUCCESS,
    articles,
    totalCount,
    currentPage,
})

export const CreateNewArticle = (article: IItem) => ({
    type: CatalogActionType.CREATE_NEW_ARTICLE,
    article,
})

export const AddCommentToArticle = (articleId: string, comment: CommentType) => ({
    type: CatalogActionType.ADD_COMMENT,
    articleId,
    comment,
})