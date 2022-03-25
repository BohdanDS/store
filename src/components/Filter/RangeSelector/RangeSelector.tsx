import React from 'react';
import {Slider} from "antd";

const RangeSelector = () => {
    return (
        <div>
            <Slider range defaultValue={[0, 100]}/>
        </div>
    );
};

export default RangeSelector;