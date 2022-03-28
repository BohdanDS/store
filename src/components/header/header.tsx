import React from 'react';
import Search from "../search";
import './index.less'
import {Button} from "antd";
import {AmazonOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";


const Header = () => {

    const itemInCart = useSelector<AppRootStateType, number>(state => state.cart.length)
    console.log(itemInCart)
    return (
        <header className='header-container'>
            <div className='block-1'>
                <AmazonOutlined/>
            </div>
            <div className='block-2'>
                <Search/>
            </div>
            <div className='block-3'>
                <Button type='link'>Login</Button>
                {itemInCart !== 0 && <span className='cartItem'>{itemInCart}</span>}
                <ShoppingCartOutlined/>
            </div>
            {/*<Filter/>*/}
        </header>
    )
        ;
};

export default Header;