import React from 'react';
import {useSelector} from "react-redux";
import {TApplicationState} from "../store/aplication-state";
import {ModalsEnum} from "../models/modals";
import Login from "./auth/login";
import Registration from "./auth/registration";


const Modals = () => {

    const modalToShow = useSelector<TApplicationState, string | null>(state => state.modals.modalToShow)
    console.log(modalToShow)
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
        <>
            <div>
                {modalToShowSwitcher(modalToShow)}
            </div>
        </>
    );
};

export default Modals;