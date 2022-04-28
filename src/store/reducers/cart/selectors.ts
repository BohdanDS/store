import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

export const itemsOnCartSelectors = (state: TApplicationState) => state.cart.itemsLocal
export const productOSelectors = (state: TApplicationState) => state.cart.products
export const getCartSelector = (state: TApplicationState) => state.cart

export const cartSelection = () => createSelector(
	getCartSelector,
	cart => cart
)

export const itemsOnCartSelections = () => createSelector(
	itemsOnCartSelectors,
	items => items
)

export const productOnCartSelections = () => createSelector(
	productOSelectors,
	products => products
)