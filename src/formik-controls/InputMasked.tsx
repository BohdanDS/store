import React from 'react'
import {ErrorMessage, Field, useFormikContext} from 'formik'
import {FieldAttributes} from 'formik/dist/Field'
import MaskedInput from 'antd-mask-input'
import TextError from './text-error'

type InputMaskedPropsType = {
    name: string
    label: string
}
const InputMasked = ({name, label}: InputMaskedPropsType) => {

    const phoneMask = '+375 (00) 000-00-00';
    const {handleChange} = useFormikContext()

    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <Field className="form-control" name={name} id={name}>
                {(el: FieldAttributes<any>) => (
                    <div>
                        <MaskedInput id = {name} name = {name}
                            mask={phoneMask}
                            onChange={handleChange}
                        />
                        {el.meta.touched && el.meta.error && <ErrorMessage name={name} component={TextError}/>}
                    </div>
                )}
            </Field>
        </div>
    )
}

export default InputMasked