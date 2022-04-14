import React from 'react';
import {useSelector} from "react-redux";
import {TApplicationState} from "../store/aplication-state";
import {ModalsEnum} from "../models/modals";
import Login from "./auth/login";

const Modals = () => {

    const modalToShow = useSelector<TApplicationState, string | null>(state => state.modals.modalToShow)
    console.log(modalToShow)
    const modalToShowSwitcher = (modalToShow: string|null) => {
        switch (modalToShow) {
            case ModalsEnum.LOGIN_MODAL: {
                console.log('1')
                return <Login/>
            }
            default:
                return null
        }
    }

    return (
        <>
            {console.log('1233')}
            <div>
                {modalToShowSwitcher(modalToShow)}
            </div>
        </>
    );
};

export default Modals;