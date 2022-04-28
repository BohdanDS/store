import React, {FC} from 'react';
import {ErrorMessage, Field, FieldAttributes, useFormikContext} from "formik";
import {DatePicker} from "antd";
import textError from "./textError";
import moment from "moment";

type Props = {
	name: string
	label: string
}

const DatePickerField: FC<Props> = ({name, label}) => {

	const {setFieldValue} = useFormikContext()


	function onChange(date: moment.Moment | null, dateString: any) {
		setFieldValue(name, dateString)
		console.log(dateString);
	}

	return (
		<div className='field-container'>
			<label htmlFor={name}>{label}:</label>
			<Field id={name} name={name}>
				{(el: FieldAttributes<any>) => {
					return (
						<>
							<DatePicker style={{width:'200px'}} name={name} onChange={onChange}/>
							<ErrorMessage name={name} component={textError}/>
						</>
					)
				}
				}
			</Field>
		</div>
	);
};

export default DatePickerField;