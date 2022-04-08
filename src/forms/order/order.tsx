import React from 'react';
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {InputComponent, InputMasked, RadioGroup, TextAreaComponent} from "../../formik-controls";
import {Button} from "antd";
import './index.less'
import {useDispatch, useSelector} from "react-redux";
import {CreateNewOrder} from "../../store/reducers/orders/actions";
import {v4 as uuidv4} from 'uuid';
import {TCartState} from "../../store/reducers/cart";
import {ResetCart} from "../../store/reducers/cart/actions";
import {ORDER_STATUSES} from "../../models/feels";
import {useHistory} from "react-router-dom";
import {TApplicationState} from "../../store/aplication-state";


const Order = () => {

    const dispatch = useDispatch()
    const itemsOnCart = useSelector<TApplicationState, TCartState>(state => state.cart)

    const history = useHistory()

    const initialState = {
        shipping: '',
        city: '',
        addressLine: '',
        firstName: '',
        lastName: '',
        textArea: '',
        mobilePhone: ''
    }
    const validationSchema = Yup.object({
        shipping: Yup.string().required('Please specify the way of shipping'),
        city: Yup.string().required('Please enter a city'),
        addressLine: Yup.string().required('Please enter a address'),
        firstName: Yup.string().required('Please enter First name'),
        lastName: Yup.string().required('Please enter Last name'),
        mobilePhone: Yup.string().required('Please enter mobile phone')
    })
    const onSubmit = (values: any) => {
        dispatch(CreateNewOrder(uuidv4(), Date(), 'test@gmail.com', ORDER_STATUSES.ORDER_IN_PROGRESS, itemsOnCart, values))
        dispatch(ResetCart())
        history.push('/my-orders')
        console.log('Form data', values)
    }

    return (
        <div className='orderForm-container'>
            <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(formik) => (
                    <Form>
                        <RadioGroup name='shipping' values={['Courier delivery', 'Postal delivery']}
                                    label='Specify the way of shipping:'/>
                        <InputComponent label='City' name='city'/>
                        <InputComponent label='Address Line' name='addressLine'/>
                        <InputComponent label='First Name' name='firstName'/>
                        <InputComponent label='Last Name' name='lastName'/>
                        <TextAreaComponent name='textArea' label='Comment'/>
                        <InputMasked label='Mobile Phone' name='mobilePhone'/>
                        <Button htmlType="submit" type={'default'}>Confirm Order</Button>
                    </Form>)}
            </Formik>
        </div>
    );
};

export default Order;