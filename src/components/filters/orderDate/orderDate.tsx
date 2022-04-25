import React from 'react';
import {DatePicker} from "antd";
import moment from 'moment';
import './index.less'

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const OrderDate = () => {

    const selectDateHandler = (values: unknown, formatString: [string, string]) => {
    }

    return (
        <div className='dateRange-container'>
            <RangePicker
                defaultValue={[moment('2022-03-01', dateFormat), moment('2022-03-31', dateFormat)]}
                onChange = {selectDateHandler}
            />
        </div>
    );
};

export default OrderDate;