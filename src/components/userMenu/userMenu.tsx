import React, {useState} from 'react';
import {UserOutlined} from "@ant-design/icons";
import './index.less'
import { Link } from 'react-router-dom';

const UserMenu = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const showMenuHandler = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <div className = 'userMenu-container'>
            <UserOutlined onClick={showMenuHandler}/>
            {isMenuVisible && <div className='userMenu-container__menu'>
                <Link to ='/my-orders' onClick={showMenuHandler}>Orders History</Link>
                <Link to ='/' onClick={showMenuHandler}>Log Out</Link>
            </div>}
        </div>
    );
};

export default UserMenu;