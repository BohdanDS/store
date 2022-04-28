import React from 'react';
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {Button} from "antd";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {StartRegistration} from "../../store/reducers/auth/actions";

type RegistrationFormType = {
	onCancel: () => void
}

const RegistrationForm = ({onCancel}: RegistrationFormType) => {

	const dispatch = useDispatch()

	const initialState = {
		email: '',
		userName: '',
		password: '',
		passwordConfirmation: ''
	}

	const validationSchema = Yup.object({
		login: Yup.string().email('Invalid email format').required('Please enter email address'),
		password: Yup.string().required('Please enter password').matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, // Regex for password validation 8 symbols and should include One Uppercase, One Lowercase, One Number and One Special Case Character
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
		),
		passwordConfirmation: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
	})

	const handleSubmit = (formik: any) => {
		const {email, userName, password} = formik.values
		dispatch(StartRegistration(email, userName, password))
		!formik.errors && onCancel()
	}
	return (
		<div>
			<Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={validationSchema}>
				{(formik) => {
					return (
						(
							<Form>
								<InputComponent name={'email'} label={'Email'}/>
								<InputComponent name={'userName'} label={'User Name'}/>
								<InputComponent name={'password'} label={'Password'}/>
								<InputComponent name={'passwordConfirmation'} label={'Confirm password'}/>
								<Button type={'default'} onClick={onCancel}>Cancel</Button>
								<Button onClick={() => handleSubmit(formik)} htmlType="submit"
								        type={'default'}>Submit</Button>
							</Form>
						)
					)
				}}
			</Formik>
		</div>
	);
};

export default RegistrationForm;