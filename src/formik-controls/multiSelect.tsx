import React, {FC} from 'react';
import {Select} from "antd";
import {Field, FieldAttributes, useFormikContext} from "formik";

const {Option} = Select;

type Props = {
    options: string[]
    name: string
    label: string
}

const MultiSelect: FC<Props> = ({options, name, label}) => {

    const {setFieldValue} = useFormikContext()

    const handler = (value: any) => {
        setFieldValue(name, value)
    }


    return (
        <>
            <label htmlFor={name}>{label}:</label>
            <Field id={name} name={name}>
                {(_el: FieldAttributes<any>) => {
                    return (
                        <Select
                            id={name}
                            mode="multiple"
                            allowClear
                            style={{width: '100%'}}
                            placeholder="Please select..."
                            // onSelect={handler}
                            onChange={handler}
                        >
                            {options.map(item => {
                                return (
                                    <Option id={name} key={item}>{item}</Option>
                                )
                            })}
                        </Select>
                    )
                }
                }
            </Field>
        </>
    );
};

export default MultiSelect;