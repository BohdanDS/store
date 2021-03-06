import React from 'react';
import SearchFilter from "../search";
import './index.less'
import {AmazonOutlined, LoginOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import UserMenu from "../userMenu/userMenu";
import {OpenModal} from "../../store/reducers/modals/actions";
import {ModalsEnum} from "../../models/modals";
import {itemsOnCartSelections} from "../../store/reducers/cart/selectors";
import _ from "lodash";
import {SelectAuthData} from "../../store/reducers/auth/selector";


const Header = () => {

	const dispatch = useDispatch()
	const itemsInCart = useSelector(itemsOnCartSelections())
	const authData = useSelector(SelectAuthData())

	const loginHandler = () => {
		dispatch(OpenModal(ModalsEnum.LOGIN_MODAL))
	}

	return (
		<header className='header-container'>
			<div className='block-1'>
				<Link to={'/'}><AmazonOutlined/></Link>
			</div>
			<div className='block-2'>
				<SearchFilter/>
			</div>
			<div className='block-3'>
				{authData.isAuth ? <UserMenu/> : <LoginOutlined onClick={loginHandler}/>}
				<Link to={'/cart'}>
					<div className='block-3__cart'>
						{_.isEmpty({itemsInCart}) && <span className='cartItem'>{itemsInCart}</span>}
						<ShoppingCartOutlined/>
					</div>
				</Link>
			</div>
		</header>
	)
		;
};

export default Header;