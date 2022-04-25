import {CardActionsType} from "./action-types";
import {cartProduct} from "./index";

export const DeleteFromCardStartAction = (itemId: {id: number}[]) => ({
    type: CardActionsType.START_REMOVING_ITEM_FROM_CARD,
    itemId
})
export const AddItemToCard = (itemId: number) => ({
    type: CardActionsType.ADD_ITEM_TO_CARD_SUCCESS,
    itemId,
})

export const DecreaseItemCount = (itemId: number) => ({
    type: CardActionsType.DECREASE_ITEM_COUNT,
    itemId,
})

export const RemoveItemFromCard = (itemId: number) => ({
    type: CardActionsType.REMOVE_ITEM_FROM_CARD_SUCCESS,
    itemId
})

export const ResetCart = () => ({
    type: CardActionsType.RESET_CART
})

export const fetchCartItems = (items: cartProduct[]) => ({
    type: CardActionsType.FETCHING_ITEMS_SUCCESS,
    items
})