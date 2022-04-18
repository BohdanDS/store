import {CategoryActionsType} from "./action-types";
import {ICategory} from "../../../models/category";


export const CreateNewCategory = (category: ICategory) => ({
    type: CategoryActionsType.CREATE_NEW_CATEGORY_SUCCESS,
    category
})

export const RemoveCategory = (categoryId: number) => ({
    type: CategoryActionsType.REMOVE_CATEGORY_SUCCESS,
    categoryId
})

export const SetCategories = (categories: ICategory[]) => ({
    type: CategoryActionsType.SET_CATEGORIES_SUCCESS,
    categories
})


