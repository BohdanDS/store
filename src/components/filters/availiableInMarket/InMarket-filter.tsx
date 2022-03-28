import React from 'react';
import { Switch } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ChangeInMarketToggle} from "../../../store/filter-reducer/actions";

const InMarketFilter = () => {

    const checked = useSelector<AppRootStateType, boolean>(state => state.filter.inMarket)
    const dispatch = useDispatch()

    function onChange(checked:boolean) {
        dispatch(ChangeInMarketToggle(checked))
    }
    return (
        <div>
            In Market:
            <Switch defaultChecked onChange={onChange} checked={checked}/>
        </div>
    );
};

export default InMarketFilter;