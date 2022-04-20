import React, {FC} from 'react';
import {Select} from "antd";
import {Field, FieldAttributes, useFormikContext} from "formik";
import {ICategory} from "../models/category";

const {Option} = Select;

type Props = {
    options:  ICategory[]
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
                {(el: FieldAttributes<any>) => {
                    return (
                        <Select
                            id={name}
                            mode="multiple"
                            allowClear
                            style={{width: '100%'}}
                            placeholder="Please select..."
                            onChange={handler}
                            value={el.field.value}
                        >
                            {options.map(item => {
                                return (
                                    <Option id={item.id} key={item.id}>{item.title}</Option>
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