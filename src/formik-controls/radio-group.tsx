import React, {useState} from 'react';
import {Radio, RadioChangeEvent} from "antd";
import {ErrorMessage, Field, FieldAttributes, useFormikContext} from "formik";
import '../styles/input.less'
import textError from "./text-error";

type RadioGroupPropsType = {
    label: string
    values: string[]
    name: string
}


const RadioGroup = ({values, label, name}: RadioGroupPropsType) => {

    const [value, setValue] = useState('');

    const {handleChange} = useFormikContext()

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h4>{label}</h4>
            <Field type='radio' id={name} name={name}>
                {(el: FieldAttributes<any>) => {
                    return (
                        <>
                            <Radio.Group onChange={onChange} id={name} value={value}>
                                {values.map(value =>
                                    <Radio key={value} id={name} value={value} onChange={handleChange}>{value}</Radio>
                                )}
                            </Radio.Group>
                            <ErrorMessage name={name} component={textError}/>
                        </>
                    )
                }
                }
            </Field>
        </>
    );
};

export default RadioGroup;