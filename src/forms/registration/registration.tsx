import React from 'react';
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {Button} from "antd";
import * as Yup from "yup";

type LoginFormType = {
    onCancel: () => void
}

const RegistrationForm = ({onCancel}: LoginFormType) => {

    const initialState = {
        login: '',
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

    const onSubmit = (values: any) => {
        console.log('Form data', values)
        onCancel()
    }

    return (
        <div>
            <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <InputComponent name={'email'} label={'Email'}/>
                    <InputComponent name={'password'} label={'Password'}/>
                    <InputComponent name={'passwordConfirmation'} label={'Confirm password'}/>
                    <Button type={'default'} onClick={onCancel}>Cancel</Button>
                    <Button htmlType="submit" type={'default'}>Submit</Button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;