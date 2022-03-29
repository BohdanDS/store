import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import {InputComponent, InputMasked, RadioGroup, TextAreaComponent} from "../formik-controls";

import {Button} from "antd";


const Order = () => {

    const initialState = {
        city: '',
        addressLine: '',
        firstName: '',
        lastName: '',
        textArea: '',
        mobilePhone: ''
    }
    const validationSchema = Yup.object({
        city: Yup.string().required('Please enter a city'),
        addressLine: Yup.string().required('Please enter a address'),
        firstName: Yup.string().required('Please enter First name'),
        lastName: Yup.string().required('Please enter Last name'),
        mobilePhone: Yup.string().required('Please enter mobile phone')
    })
    const onSubmit = (values: any) => {
        console.log('Form data', values)
    }

    return (
        <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(formik) => (
                <Form>
                    <RadioGroup values={['Courier delivery', 'Postal delivery']} title='Specify the way of shipping:'/>
                    <InputComponent label='City' name='city'/>
                    <InputComponent label='Address Line' name='addressLine'/>
                    <InputComponent label='First Name' name='firstName'/>
                    <InputComponent label='Last Name' name='lastName'/>
                    <TextAreaComponent name='textArea' label='Comment'/>
                    <InputMasked label='Mobile Phone' name='mobilePhone'/>
                    <Button htmlType="submit" type={'default'}>Confirm Order</Button>
                </Form>)}
        </Formik>
    );
};

export default Order;