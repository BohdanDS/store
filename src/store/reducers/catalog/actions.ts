import {CatalogActionType} from './actions-types'
import {CommentType, FilterDataType} from "./index";
import {IItem, TItem} from "../../../models/catalogItems";


export const StartFetchArticles = (page: number, pageSize: number) => ({
    type: CatalogActionType.START_LOAD_ARTICLES,
    page,
    pageSize,
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
