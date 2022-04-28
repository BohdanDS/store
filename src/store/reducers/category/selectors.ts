import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

export const categoriesSelector = (state: TApplicationState)=>state.category

export const SelectCategories = ()=> createSelector(
	categoriesSelector,
	categories=>categories
)