import React from 'react';
import {useDispatch} from "react-redux";
import Filter from "../filters/filter";
import ItemsMain from "../itemsMain/itemsMain";
import {AddItemToCartStartAction} from "../../store/reducers/cart/actions";

const Catalog = () => {
	const dispatch = useDispatch()
	const addToCart = (itemId: number) => {
		dispatch(AddItemToCartStartAction(itemId))
	}

	return (
		<>
			<Filter/>
			<ItemsMain addToCart={addToCart}/>
		</>
	);
};

export default Catalog;