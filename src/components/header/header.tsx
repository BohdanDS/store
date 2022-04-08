import React from 'react';
import Search from "../search";
import './index.less'
import {AmazonOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Auth from "../../modals/auth/login";
import {TApplicationState} from "../../store/aplication-state";


const Header = () => {

    const itemsInCart = useSelector<TApplicationState, number[]>(state => Object.values(state.cart)).reduce((a, b) => a + b, 0)

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
                {/*<Button type='link'>Login</Button>*/}
                <Link to={'/*'} component={Auth}/>
                <Link to={'/cart'}>
                    {itemsInCart !== 0 && <span className='cartItem'>{itemsInCart}</span>}
                    <ShoppingCartOutlined/>
                </Link>
            </div>
        </header>
    )
        ;
};

export default Header;