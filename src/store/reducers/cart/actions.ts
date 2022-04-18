import {CardActionsType} from "./action-types";


export const AddItemToCard = (itemId: number) => ({
    type: CardActionsType.ADD_ITEM_TO_CARD,
    itemId,
})

export const IncreaseItemCount = (itemId:number) => ({
    type: CardActionsType.INCREASE_ITEM_COUNT,
    itemId,
})

export const DecreaseItemCount = (itemId:number)=> ({
    type: CardActionsType.DECREASE_ITEM_COUNT,
    itemId,
})

export const RemoveItemFromCard = (itemId: number) => ({
    type: CardActionsType.REMOVE_ITEM_FROM_CARD,
    itemId
})

export const ResetCart = ()=>({
    type: CardActionsType.RESET_CART
})