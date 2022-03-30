import React, {useState} from 'react';
import {Radio, RadioChangeEvent} from "antd";
import {Field} from "formik";
import '../styles/input.less'

type RadioGroupPropsType = {
    label: string
    values: string[]
    name: string
}


const RadioGroup = ({values, label, name}: RadioGroupPropsType) => {

    const [value, setValue] = useState(values[0]);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        // console.log(e.target.value)
    };

    return (
        <>
            <h4>{label}</h4>
            <Radio.Group onChange={onChange} value={value} id={name}>
                {values.map(value =>
                        <Radio key = {value}id={name} value={value}>{value}</Radio>
                )}
            </Radio.Group>
        </>
    );
};

export default RadioGroup;