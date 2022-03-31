import React from 'react';
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {Button} from "antd";

type LoginFormType = {
    onCancel:()=>void
}

const LoginForm = ({onCancel}:LoginFormType) => {

    const initialState = {
        login: '',
        password: ''
    }

    const validationSchema = Yup.object({
        login: Yup.string().email('Invalid email format').required('Please enter email address'),
        password: Yup.string().required('Please enter password')
    })

    const onSubmit = (values: any) => {
        console.log('Form data', values)
        onCancel()
    }

    return (
        <div>
            <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <InputComponent name={'login'} label={'Email'}/>
                    <InputComponent type='password' name={'password'} label={'Password'}/>
                    <Button type={'default'} onClick={onCancel}>Cancel</Button>
                    <Button htmlType="submit" type={'default'}>Submit</Button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;