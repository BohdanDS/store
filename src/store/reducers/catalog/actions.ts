import {CatalogActionType} from './actions-types'
import {CommentType} from "./index";
import {IItem, TItem} from "../../../models/catalogItems";


export const StartFetchArticles = () => ({
    type: CatalogActionType.LOAD_ARTICLES_START,
})

export const fetchArticles = (articles: IItem[], totalCount: number, page: number) => ({
    type: CatalogActionType.LOAD_ARTICLES_SUCCESS,
    articles,
    totalCount,
    page,
})

export const getArticleById = (id:string)=>({
    type: CatalogActionType.LOAD_ITEM_BY_ID_START,
    id
})

export const getArticleByIdSuccess = (article: IItem) => ({
    type: CatalogActionType.LOAD_ITEM_BY_ID_SUCCESS,
    article
})
export const StartRemovingArticle = (itemId: number) => ({
    type: CatalogActionType.REMOVE_ARTICLE_START,
    itemId
})

export const CreateNewArticle = (article: TItem) => ({
    type: CatalogActionType.CREATE_NEW_ARTICLE_START,
    article,
})

export const AddCommentToArticle = (articleId: string, comment: CommentType) => ({
    type: CatalogActionType.ADD_COMMENT_START,
    articleId,
    comment,
})

//Filters

export const AddCategoryFilterValue = (categoriesId: number[]) => ({
    type: CatalogActionType.ADD_CATEGORY_FILTER_VALUE,
    categoriesId
})

export const AddSearchStringFilterValue = (searchString: string) => ({
    type: CatalogActionType.ADD_SEARCH_STRING_FILTER_VALUE,
    searchString
})

export const AddPriceFilterValue = (prices: [number, number]) => ({
    type: CatalogActionType.ADD_PRICE_FILTER_VALUE,
    prices
})

export const ChangeCatalogPageAction = (pageNumber:number)=>({
    type: CatalogActionType.CHANGE_CURRENT_PAGE,
    pageNumber
})
