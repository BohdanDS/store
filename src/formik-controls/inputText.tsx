import React, {FC} from 'react';
import {ErrorMessage, Field, FieldAttributes, useFormikContext} from "formik";
import {Input} from 'antd';
import textError from "./textError";
import './index.less'


type Props = {
	name: string
	label: string
	type?: string
}


const InputText: FC<Props> = ({label, name, type}) => {

	const {handleChange} = useFormikContext()
	return (
		<div className='field-container'>
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name}>
				{(el: FieldAttributes<any>) => {
					return (
						<>
							<div className='field-container__Input'>
								<Input type={type ? type : 'input'} value={el.field.value} onChange={handleChange}
								       id={name} autoFocus/>
								<div className='field-container__InputError'>
									<ErrorMessage name={name} component={textError}/>
								</div>
							</div>
						</>

					)
				}
				}
			</Field>
		</div>
	);
};

export default InputText;