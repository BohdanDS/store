import {CategoryActionsType} from "./action-types";


export const CreateNewCategory = (categoryName: string) => ({
    type: CategoryActionsType.CREATE_NEW_CATEGORY,
    categoryName
})

export const RemoveCategory = (categoryId: string) => ({
    type: CategoryActionsType.REMOVE_CATEGORY,
    categoryId
})

export const UpdateCategory = (categoryId: string, categoryTitle:string) =>({
    type: CategoryActionsType.UPDATE_CATEGORY,
    categoryId,
    categoryTitle
})


