import {TApplicationState} from "../../aplication-state";
import {createSelector} from "reselect";

export const roleSelector = (state: TApplicationState) => state.login.user.role

export const SelectRole = () => createSelector(
	roleSelector,
	role => role
)

export const authSelector = (state: TApplicationState) =>state.login

export const SelectAuthData = ()=>createSelector(
	authSelector,
	loginData=>loginData
)