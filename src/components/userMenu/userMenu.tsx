import React, {useState} from 'react';
import {UserOutlined} from "@ant-design/icons";
import './index.less'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {TApplicationState} from "../../store/aplication-state";
import {TAuthState} from "../../store/reducers/auth";
import {Logout} from "../../store/reducers/auth/actions";
import {AuthActionTypes} from "../../store/reducers/auth/actions-types";

const UserMenu = () => {

    const dispatch = useDispatch()
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const authData = useSelector<TApplicationState, TAuthState>(state => state.login)

    const showMenuHandler = () => {
        setIsMenuVisible(!isMenuVisible)
    }
    const logOutHandler = () => {
        dispatch({type: AuthActionTypes.LOGOUT})
    }

    return (
        <div className='userMenu-container'>
            <UserOutlined onClick={showMenuHandler}/>
            {isMenuVisible && <div className='userMenu-container__menu' onClick={showMenuHandler}>
                <h4>{authData.user.name}</h4>
                <Link to='/my-orders'>Orders History</Link>
                <Link to='/' onClick={logOutHandler}>Log Out</Link>
            </div>}
        </div>
    );
};

export default UserMenu;