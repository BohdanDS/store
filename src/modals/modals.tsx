import React from 'react';
import {useSelector} from "react-redux";
import {ModalsEnum} from "../models/modals";
import Login from "./auth/login";
import Registration from "./auth/registration";
import {SelectModalToShow} from "../store/reducers/modals/selectors";


const Modals = () => {

	const modalToShow = useSelector(SelectModalToShow())
	const modalToShowSwitcher = (modalToShow: string | null) => {
		switch (modalToShow) {
			case ModalsEnum.LOGIN_MODAL: {
				return <Login/>;
			}
			case ModalsEnum.REGISTRATION_MODAL: {
				return <Registration/>
			}
			default:
				return null
		}
	}

	return (
		<div>
			{modalToShowSwitcher(modalToShow)}
		</div>
	);
};

export default Modals;