import React from 'react';
import {Select} from "antd";
import {ORDER_STATUSES} from "../../../models/feels";
import {useDispatch} from "react-redux";
import {SetOrderStatus} from "../../../store/reducers/ordersFilter/actions";
import './index.less'

const { Option } = Select;

const filterValues = Object.values(ORDER_STATUSES)


const OrderStatus = () => {

    const dispatch = useDispatch()

    const selectHandler = (selectedValue:ORDER_STATUSES)=> {
        dispatch(SetOrderStatus(selectedValue))
    }

    return (
        <div className='statusFilter'>
            <Select defaultValue={ORDER_STATUSES.ALL_ORDERS} style={{width:'300px'}} onSelect={selectHandler}>
                {filterValues.map(value=>{
                    return(
                        <Option key = {value} value={value}>{value}</Option>
                    )
                })}
            </Select>
        </div>
    );
};

export default OrderStatus;