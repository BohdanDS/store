import React from 'react';
import Search from "../search";
import './index.less'
import {AmazonOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {TApplicationState} from "../../store/aplication-state";
import UserMenu from "../userMenu/userMenu";
import {TAuthState} from "../../store/reducers/auth";
import {LoginOutlined} from "@ant-design/icons";
import {OpenModal} from "../../store/reducers/modals/actions";
import {ModalsEnum} from "../../models/modals";


const Header = () => {

    const dispatch = useDispatch()
    const itemsInCart = useSelector<TApplicationState, number[]>(state => Object.values(state.cart)).reduce((a, b) => a + b, 0)
    const authData = useSelector<TApplicationState, TAuthState>(state => state.login)

    const loginHandler = () => {
        dispatch(OpenModal(ModalsEnum.LOGIN_MODAL))
    }

    return (
        <header className='header-container'>
            <div className='block-1'>
                <Link to={'/'}>
                    <AmazonOutlined/>
                </Link>
            </div>
            <div className='block-2'>
                <Search/>
            </div>
            <div className='block-3'>
                {authData.isAuth ? <UserMenu/> : <LoginOutlined onClick={loginHandler}/>}
                <Link to={'/cart'}>
                    <div className='block-3__cart'>
                        {itemsInCart !== 0 && <span className='cartItem'>{itemsInCart}</span>}
                        <ShoppingCartOutlined/>
                    </div>
                </Link>
            </div>
        </header>
    )
        ;
};

export default Header;