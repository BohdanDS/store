import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

export const notificationSelector = (state: TApplicationState) => state.notification

export const SelectNotification = () => createSelector(
	notificationSelector,
	notification => notification
)