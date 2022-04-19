import React from 'react';
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {Button} from "antd";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";

type RegistrationFormType = {
    onCancel: () => void
}

const RegistrationForm = ({onCancel}: RegistrationFormType) => {

    const dispatch = useDispatch()

    type RegistrationFormType = typeof initialState

    const initialState = {
        email: '',
        userName: '',
        password: '',
        passwordConfirmation: ''
    }

    const validationSchema = Yup.object({
        login: Yup.string().email('Invalid email format').required('Please enter email address'),
        password: Yup.string().required('Please enter password').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const handleSubmit = (formik: any) => {
        const {passwordConfirmation, ...registrationData} = formik.values
        dispatch({type: AuthActionTypes.START_REGISTRATION, ...registrationData})
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