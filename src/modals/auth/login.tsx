import React from 'react';
import {Button, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {CloseModal, OpenModal} from "../../store/reducers/modals/actions";
import {TApplicationState} from "../../store/aplication-state";
import {ModalsEnum} from "../../models/modals";
import './index.less'
import {Link} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const modalToShow = useSelector<TApplicationState, string | null>(state => state.modals.modalToShow)
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

    const onSubmit = (values: TLoginFormData) => {
        dispatch({
            type: AuthActionTypes.START_LOGIN,
            login: values.login,
            password: values.password,
        })
    }

    const onCancel = () => {
        dispatch(CloseModal())
    }

    const registerLinkHandler = ()=>{
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
                                <p className='registrationLink'>Don't have account? <Link to={''} onClick={registerLinkHandler}>Register it here</Link></p>
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