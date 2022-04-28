import React, {FC} from 'react';
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {useFormikContext} from "formik";

type Props = {
	name: string
	label:string
}

const CheckboxField: FC<Props> = ({name,label}) => {
	const {setFieldValue} = useFormikContext()

	function onChange(e: CheckboxChangeEvent) {
		setFieldValue(name, e.target.checked)
		console.log(`checked = ${e.target.checked}`);
	}

	return (
		<Checkbox onChange={onChange}>{label}</Checkbox>
	);
};

export default CheckboxField;