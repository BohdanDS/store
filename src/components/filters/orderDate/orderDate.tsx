import React from 'react';
import {DatePicker} from "antd";
import moment from 'moment';


const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const OrderDate = () => {

    // @ts-ignore
    const selectDateHandler = (values: RangeValue<Moment>, formatString: [string, string]) => {
        console.log(values)
    }


    return (
        <div>
            <RangePicker
                defaultValue={[moment('2022-03-01', dateFormat), moment('2022-03-31', dateFormat)]}
                onChange = {selectDateHandler}
            />
        </div>
    );
};

export default OrderDate;