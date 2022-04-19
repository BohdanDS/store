export const CardActionsType = {
    START_ADDING_ITEM_TO_CARD: '[cart] START_ADDING_ITEM_TO_CARD',
    ADD_ITEM_TO_CARD_SUCCESS: '[cart] ADD_ITEM_TO_CARD_SUCCESS',
    ADD_ITEM_TO_CARD_FAILED: '[cart] ADD_ITEM_TO_CARD_FAILED',
    START_REMOVING_ITEM_FROM_CARD: '[cart] REMOVE_ITEM_FROM_CARD',
    REMOVE_ITEM_FROM_CARD_SUCCESS: '[cart] REMOVE_ITEM_FROM_CARD',
    REMOVE_ITEM_FROM_CARD_FAILED: '[cart] REMOVE_ITEM_FROM_CARD',
    INCREASE_ITEM_COUNT: '[cart] INCREASE_ITEM_COUNT',
    DECREASE_ITEM_COUNT: '[cart] DECREASE_ITEM_COUNT',
    RESET_CART:'[cart] RESET_CART'
} as const