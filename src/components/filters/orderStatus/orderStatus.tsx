import React from 'react';
import {Select} from "antd";
import {ORDER_STATUSES} from "../../../models/feels";

const { Option } = Select;

const filterValues = Object.values(ORDER_STATUSES)


const OrderStatus = () => {

    return (
        <div>
            <Select defaultValue={ORDER_STATUSES.ALL_ORDERS} style={{width:'300px'}}>
                {filterValues.map(value=>{
                    return(
                        <Option key = {value} value={value}>{value}</Option>
                    )
                })}
                {/*<Option value="Zhejiang">Zhejiang</Option>*/}
                {/*<Option value="Jiangsu">Jiangsu</Option>*/}
            </Select>
        </div>
    );
};

export default OrderStatus;