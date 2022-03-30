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
        console.log('123')
        // console.log(e.target.value)
    };

    return (
        <>
            <h4>{label}</h4>
            {/*<label htmlFor={name}>{values[0]}<Field type='radio' name={name}></Field></label>*/}
            {/*<label htmlFor={name}>{values[1]}<Field type='radio' name={name}></Field></label>*/}


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