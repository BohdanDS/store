import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

const catalogState = (state: TApplicationState) => state.catalog.items

export const CategoryArray = () => createSelector(
	catalogState,
	articles => articles.map(article => article.categories)
)

export const catalogPageSize = (state: TApplicationState) => state.catalog.pageSize
export const catalogCurrentPage = (state: TApplicationState) => state.catalog.currentPage


export const SelectPageSize = () => createSelector(
	catalogPageSize,
	size => size
)

export const SelectCurrentCatalogPage = () => createSelector(
	catalogCurrentPage,
	page => page
)

export const catalogFilterData = (state: TApplicationState) => state.catalog.filterData

export const SelectFilterData = () => createSelector(
	catalogFilterData,
	filterDataSelector => filterDataSelector
)