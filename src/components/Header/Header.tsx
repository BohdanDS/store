import React from 'react';
import Search from "../Search";
import './index.less'
import {Button} from "antd";

const Header = () => {
    return (
        <div className='container'>
            <Search/>
            <Button>Login</Button>
        </div>
    );
};

export default Header;