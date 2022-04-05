import {CatalogActionType} from './actions-types'
import {ItemType} from "./index";

export const CreateNewArticle =(article:ItemType) =>({
    type: CatalogActionType.CREATE_NEW_ARTICLE,
    article
})