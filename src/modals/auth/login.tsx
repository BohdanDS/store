import React from 'react';
import {Button, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {CloseModal, OpenModal} from "../../store/reducers/modals/actions";
import {ModalsEnum} from "../../models/modals";
import './index.less'
import {LoginStartAction} from "../../store/reducers/auth/actions";
import {SelectModalToShow} from "../../store/reducers/modals/selectors";

const Login = () => {

    const dispatch = useDispatch()
    const modalToShow = useSelector(SelectModalToShow())
    const modalState = modalToShow === ModalsEnum.LOGIN_MODAL

    const initialState = {
        login: '',
        password: ''
    }

    type TLoginFormData = typeof initialState


    const validationSchema = Yup.object({
        login: Yup.string().email('Invalid email format').required('Please enter email address'),
        password: Yup.string().required('Please enter password')
    })

    const onSubmit = (loginFormData: TLoginFormData) => {
        dispatch(LoginStartAction(loginFormData.login, loginFormData.password))
    }

    const onCancel = () => {
        dispatch(CloseModal())
    }

    const registerLinkHandler = () => {
        dispatch(CloseModal())
        dispatch(OpenModal(ModalsEnum.REGISTRATION_MODAL))
    }

    return (
        <div>
            <Modal visible={modalState} onCancel={onCancel}>
                <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(formik) => (
                        <Form>
                            <InputComponent name={'login'} label={'Email'}/>
                            <InputComponent type='password' name={'password'} label={'Password'}/>
                            <div className='registrationLink'>
                                <p>Don't have account? </p>
                                <p className='registrationLink__link' onClick={registerLinkHandler}> Register it here</p>
                            </div>
                            <div className='modal_controls'>
                                <Button type={'default'} onClick={onCancel}>Cancel</Button>
                                <Button htmlType="submit" type={'default'}>LogIn</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default Login;