import React, {useState} from 'react';
import {Radio, RadioChangeEvent} from "antd";
import '../styles/input.less'

type RadioGroupPropsType = {
    title: string
    values: string[]
}


const RadioGroup = ({values, title}:RadioGroupPropsType) => {

    const [value, setValue] = useState(values[0]);

    const onChange = (e:RadioChangeEvent) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h4>{title}</h4>
            <Radio.Group onChange={onChange} value={value}>
                {values.map(value=> <Radio key={value} value={value}>{value}</Radio>)}
            </Radio.Group>
        </>
    );
};

export default RadioGroup;