import {CardActionsType} from "./action-types";


export const AddItemToCard = (itemId: string) => ({
    type: CardActionsType.ADD_ITEM_TO_CARD,
    itemId
})

export const RemoveItemFromCard = (itemId: string) => ({
    type: CardActionsType.REMOVE_ITEM_FROM_CARD,
    itemId
})