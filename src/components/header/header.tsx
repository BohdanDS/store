import React from 'react';
import Search from "../search";
import './index.less'
import {Button} from "antd";
import Filter from "../filters/filter";
import {AmazonOutlined, ShoppingCartOutlined} from "@ant-design/icons";


const Header = () => {
    return (
        <div>
            <div className='container'>
                <AmazonOutlined style={{fontSize:'24px', color:'#ede6d6'}}/>
                <Search/>
                <div>
                    <Button>Login</Button>
                </div>
                <div>
                    <ShoppingCartOutlined style={{fontSize:'24px', color:'#ede6d6'}}/>
                </div>
            </div>
            <Filter/>
        </div>
    )
        ;
};

export default Header;