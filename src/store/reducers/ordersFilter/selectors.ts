import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

export const orderStatusSelector = (state:TApplicationState)=>state.ordersFilter.status

export const SelectOrderStatuses = ()=>createSelector(
	orderStatusSelector,
	statuses=>statuses
)