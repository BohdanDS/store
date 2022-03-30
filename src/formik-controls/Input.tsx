import React, {FC} from 'react';
import {ErrorMessage, Field, FieldAttributes, useFormikContext} from "formik";
import {Input} from 'antd';
import textError from "./text-error";


type InputComponentPropsType = {
    name: string
    label: string
}


const InputComponent: FC<InputComponentPropsType> = ({label, name}) => {

    const {handleChange} = useFormikContext()
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <Field id={name} name={name}>
                {(el: FieldAttributes<any>) => {
                    return (
                        <>
                            <Input value={el.field.value} onChange={handleChange} id={name}/>
                            <ErrorMessage name={name} component={textError}/>
                        </>
                    )
                }
                }
            </Field>
        </div>
    );
};

export default InputComponent;