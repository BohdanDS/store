import React from 'react';
import Search from "../Search";
import './index.less'
import {Button} from "antd";
import Filter from "../Filter/Filter";

const Header = () => {
    return (
        <div>
            <div className='container'>
                <Search/>
                <Button>Login</Button>
            </div>
            <Filter/>
        </div>
    )
        ;
};

export default Header;