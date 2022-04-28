import React from 'react';
import {ErrorMessage, Field, FieldAttributes, useFormikContext} from "formik";
import {Input} from "antd";
import textError from "./text-error";

type TextAreaComponentPropsType = {
    name: string
    label: string
}

const TextAreaComponent = ({name, label}: TextAreaComponentPropsType) => {

    const {handleChange} = useFormikContext()

    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <Field id={name} name={name}>
                {(el: FieldAttributes<any>) => {
                    return (
                        <>
                            <Input.TextArea value={el.field.value} onChange={handleChange} id={name} name={name}/>
                            <ErrorMessage name={name} component={textError}/>
                        </>
                    )
                }
                }
            </Field>
        </div>
    );
};

export default TextAreaComponent;