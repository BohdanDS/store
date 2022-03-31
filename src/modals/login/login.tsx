import React, {useState} from 'react';
import {Modal} from 'antd';
import {LoginOutlined} from "@ant-design/icons";
import LoginForm from "../../forms/login/login";
import Registration from "../../forms/registration/registration";

const Login = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [switchModal, setSwitchModal] = useState(true)


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <LoginOutlined onClick={showModal}/>
            <Modal title={switchModal ? 'Login' : 'Registration'} visible={isModalVisible} onOk={handleOk}
                   onCancel={handleCancel} footer={[]}>
                {switchModal ? <LoginForm onCancel={handleCancel}/> : <Registration onCancel={handleCancel}/>}
                {switchModal ? <div onClick={() => setSwitchModal(false)}>Registration</div> :
                    <div onClick={() => setSwitchModal(true)}>Login</div>}
            </Modal>
        </>
    );
};

export default Login;