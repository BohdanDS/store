import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {Button, Modal} from "antd";
import {ModalsEnum} from "../../models/modals";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {CloseModal} from "../../store/reducers/modals/actions";
import {StartRegistration} from "../../store/reducers/auth/actions";
import {SelectModalToShow} from "../../store/reducers/modals/selectors";

const Registration = () => {

	const dispatch = useDispatch()
	const modalToShow = useSelector(SelectModalToShow())
	const modalState = modalToShow === ModalsEnum.REGISTRATION_MODAL

	const initialState = {
		email: '',
		userName: '',
		password: '',
		passwordConfirmation: ''
	}
	type TRegistrationFormData = typeof initialState

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Please enter email address'),
		userName: Yup.string().required('Please enter User Name').min(5, 'Name should have at least 5 symbols'),
		password: Yup.string().required('Please enter password').matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
		),
		passwordConfirmation: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
	})

	const onSubmit = (registrationFormData: TRegistrationFormData) => {
		const {email, password, userName} = registrationFormData
		dispatch(StartRegistration(email, userName, password))
	}
	const onCancel = () => {
		dispatch(CloseModal())
	}

	return (
		<div>
			<Modal visible={modalState} onCancel={onCancel}>
				<Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
					{(formik) => {
						return (
							(
								<Form>
									<InputComponent name={'email'} label={'Email Address'}/>
									<InputComponent name={'userName'} label={'User Name'}/>
									<InputComponent name={'password'} label={'Password'}/>
									<InputComponent name={'passwordConfirmation'}
									                label={'Confirm Password'}/>
									<div className='modal_controls'>
										<Button type={'default'} onClick={onCancel}>Cancel</Button>
										<Button htmlType="submit" type={'default'}>Register</Button>
									</div>
								</Form>
							)
						)
					}}
				</Formik>
			</Modal>
		</div>
	);
};

export default Registration;