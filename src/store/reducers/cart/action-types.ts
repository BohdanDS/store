export const CardActionsType = {
    FETCHING_ITEMS_START: '[CART] FETCHING_ITEMS',
    FETCHING_ITEMS_SUCCESS: '[CART] FETCHING_ITEMS_SUCCESS',
    FETCHING_ITEMS_FAILED: '[CART] FETCHING_ITEMS_FAILED',

    ADDING_ITEM_TO_CARD_START: '[CART] ADDING_ITEM_TO_CARD',
    ADD_ITEM_TO_CARD_SUCCESS: '[CART] ADD_ITEM_TO_CARD_SUCCESS',
    ADD_ITEM_TO_CARD_FAILED: '[CART] ADD_ITEM_TO_CARD_FAILED',

    REMOVING_ITEM_FROM_CARD_START: '[CART] REMOVE_ITEM_FROM_CARD',
    REMOVE_ITEM_FROM_CARD_SUCCESS: '[CART] REMOVE_ITEM_FROM_CARD_SUCCESS',
    REMOVE_ITEM_FROM_CARD_FAILED: '[CART] REMOVE_ITEM_FROM_CARD_FAILED',

    INCREASE_ITEM_COUNT: '[CART] INCREASE_ITEM_COUNT',
    DECREASE_ITEM_COUNT: '[CART] DECREASE_ITEM_COUNT',

    RESET_CART: '[CART] RESET_CART'
} as const