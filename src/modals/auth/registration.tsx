import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";
import {Button, Modal} from "antd";
import {TApplicationState} from "../../store/aplication-state";
import {ModalsEnum} from "../../models/modals";
import {Form, Formik} from "formik";
import {InputComponent} from "../../formik-controls";
import {CloseModal} from "../../store/reducers/modals/actions";

const Registration = () => {

    const dispatch = useDispatch()
    const modalToShow = useSelector<TApplicationState, string | null>(state => state.modals.modalToShow)
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

    const onSubmit = (values: TRegistrationFormData) => {
        const {passwordConfirmation, ...dataToRegistration} = values
        console.log(values)
        dispatch({
            type: AuthActionTypes.START_REGISTRATION,
            ...dataToRegistration
        })
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
                                    <InputComponent type={'password'} name={'password'} label={'Password'}/>
                                    <InputComponent type={'password'} name={'passwordConfirmation'}
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