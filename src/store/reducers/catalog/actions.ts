import {CatalogActionType} from './actions-types'
import {CommentType} from "./index";
import {IItem, TItem} from "../../../models/catalogItems";


export const StartFetchArticles = (page: number, pageSize: number) => ({
    type: CatalogActionType.START_LOAD_ARTICLES,
    page,
    pageSize
})

export const fetchArticles = (articles: IItem[], totalCount: number, page: number) => ({
    type: CatalogActionType.LOAD_ARTICLES_SUCCESS,
    articles,
    totalCount,
    page,
})

export const setArticleById = (article: IItem) => ({
    type: CatalogActionType.LOAD_ITEM_BY_ID_SUCCESS,
    article
})
export const StartRemovingArticle = (itemId: number) => ({
    type: CatalogActionType.START_REMOVE_ARTICLE,
    itemId
})

export const CreateNewArticle = (article: TItem) => ({
    type: CatalogActionType.START_CREATE_NEW_ARTICLE,
    article,
})

export const AddCommentToArticle = (articleId: string, comment: CommentType) => ({
    type: CatalogActionType.ADD_COMMENT,
    articleId,
    comment,
})