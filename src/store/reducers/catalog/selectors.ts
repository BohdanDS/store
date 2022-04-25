import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";
import catalog from "../../../components/catalog/catalog";

export const catalogPageSize = (state: TApplicationState) => state.catalog.pageSize
export const catalogCurrentPage = (state: TApplicationState) => state.catalog.currentPage
export const catalogSelector = (state: TApplicationState) => state.catalog
export const catalogFilterData = (state: TApplicationState) => state.catalog.filterData
export const itemByIdSelection = (state: TApplicationState) => state.catalog.items

export const SelectPageSize = () => createSelector(
	catalogPageSize,
	size => size
)

export const SelectCurrentCatalogPage = () => createSelector(
	catalogCurrentPage,
	page => page
)

export const SelectFilterData = () => createSelector(
	catalogFilterData,
	filterDataSelector => filterDataSelector
)


export const SelectCatalog = () => createSelector(
	catalogSelector,
	catalog => catalog
)

export const SelectItemById = (id: number) => createSelector(
	itemByIdSelection,
	items => items.find(item => item.id === id)
)

