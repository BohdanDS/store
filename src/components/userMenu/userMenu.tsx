import React, {useState} from 'react';
import {UserOutlined} from "@ant-design/icons";
import './index.less'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import {TApplicationState} from "../../store/aplication-state";
import {TAuthState} from "../../store/reducers/auth";

const UserMenu = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const authData = useSelector<TApplicationState, TAuthState>(state => state.login)

    const showMenuHandler = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <div className = 'userMenu-container'>
            <UserOutlined onClick={showMenuHandler}/>
            {isMenuVisible && <div className='userMenu-container__menu'>
                <h4>{authData.user.name}</h4>
                <Link to ='/my-orders' onClick={showMenuHandler}>Orders History</Link>
                <Link to ='/' onClick={showMenuHandler}>Log Out</Link>
            </div>}
        </div>
    );
};

export default UserMenu;