import React from 'react';
import {Switch} from 'antd';
import {useDispatch} from "react-redux";
import {ChangeInMarketToggle} from "../../../store/reducers/filter/actions";
import './index.less'


const InMarketFilter = () => {

    const checked = true
    const dispatch = useDispatch()

    function onChange(checked: boolean) {
        dispatch(ChangeInMarketToggle(checked))
    }

    return (
        <div className='availableInMarket-container'>
            <span className='availableInMarket-container__span'>Available In Market:</span>
            <Switch defaultChecked onChange={onChange} checked={checked}/>
        </div>
    );
};

export default InMarketFilter;