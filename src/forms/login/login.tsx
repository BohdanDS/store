import React from 'react';
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {TApplicationState} from "../../store/aplication-state";

type LoginFormType = {
    onCancel: () => void
}

const LoginForm = ({onCancel}: LoginFormType) => {

    type TLoginFormData = typeof initialState

    const dispatch = useDispatch()
    // const isLoggedIn = useSelector<TApplicationState, boolean>(state => state.login.isAuth)

    const initialState = {
        login: '',
        password: ''
    }

    const validationSchema = Yup.object({
        login: Yup.string().email('Invalid email format').required('Please enter email address'),
        password: Yup.string().required('Please enter password')
    })

    const onSubmit = (values: TLoginFormData) => {
        dispatch({
            type: AuthActionTypes.START_LOGIN,
            login: values.login,
            password: values.password,
        })
    }

    return (
        <div>
            <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(formik) => (
                    <Form>
                        <InputComponent name={'login'} label={'Email'}/>
                        <InputComponent type='password' name={'password'} label={'Password'}/>
                        <Button type={'default'} onClick={onCancel}>Cancel</Button>
                        <Button htmlType="submit" type={'default'}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;