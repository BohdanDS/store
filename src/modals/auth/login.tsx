import React, {useState} from 'react';
import {Modal} from 'antd';
import LoginForm from "../../forms/login/login";
import Registration from "../../forms/registration/registration";
import {useDispatch, useSelector} from "react-redux";
import {TApplicationState} from "../../store/aplication-state";
import {ModalsEnum} from "../../models/modals";
import {CloseModal} from "../../store/reducers/modals/actions";

const Login = () => {

    const dispatch=useDispatch()
    const modalToShow = useSelector<TApplicationState, string | null>(state => state.modals.modalToShow)
    const modalState = modalToShow === ModalsEnum.LOGIN_MODAL
    const [isModalVisible, setIsModalVisible] = useState(modalState);
    const [switchModal, setSwitchModal] = useState(true)


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        dispatch(CloseModal())
    };
    return (
        <>
            <Modal title={switchModal ? 'Login' : 'Registration'}
                   visible={isModalVisible} onOk={handleOk}
                   onCancel={handleCancel}
                   footer={[]}>
                {switchModal ? <LoginForm onCancel={handleCancel}/> : <Registration onCancel={handleCancel}/>}
                {switchModal ? <div onClick={() => setSwitchModal(false)}>Registration</div> :
                    <div onClick={() => setSwitchModal(true)}>Login</div>}
            </Modal>
        </>
    );
};

export default Login;