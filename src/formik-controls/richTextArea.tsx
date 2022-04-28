import React, {FC} from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {useFormikContext} from "formik";
import './index.less'

type Props = {
	name: string
	label: string
}

const RichTextArea: FC<Props> = ({name, label}) => {
	const {setFieldValue} = useFormikContext()

	function onChange(value: string) {
		setFieldValue(name, value)
	}

	return (
		<div className='richText'>
			<label>{label}</label>
			<ReactQuill onChange={onChange}/>
		</div>
	);
};

export default RichTextArea;