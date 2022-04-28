import React, {FC} from 'react';
import {Select} from "antd";
import {useFormikContext} from "formik";

const {Option} = Select;

type Props = {
	name: string
	label: string
	values:string[]
}

const SelectField: FC<Props> = ({name, label,values}) => {

	const {setFieldValue} = useFormikContext()

	function onChange(value: string) {
		setFieldValue(name, value)
	}

	return (
		<div style={{display:"flex", alignItems:'center'}}>
			<label style={{color:'#663a82'}}>{label}</label>
			<Select onChange={onChange}>
				{values.map(value=>{
					return(
						<Option placeholder={'Select...'} value={value}>{value}</Option>
					)
				})}
			</Select>
		</div>
	);
};

export default SelectField;