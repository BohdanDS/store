import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

export const modalToShowSelector = (state: TApplicationState)=>state.modals.modalToShow

export const SelectModalToShow = ()=> createSelector(
	modalToShowSelector,
	modalToShow=>modalToShow
)