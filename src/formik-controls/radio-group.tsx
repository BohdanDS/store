import React, {useState} from 'react';
import {Radio, RadioChangeEvent} from "antd";
import '../styles/input.less'


const RadioGroup = () => {

    const [value, setValue] = useState(1);

    const onChange = (e:RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Courier delivery</Radio>
            <Radio value={2}>Postal delivery</Radio>
        </Radio.Group>
    );
};

export default RadioGroup;