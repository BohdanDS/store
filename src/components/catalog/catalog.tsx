import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TCatalogState} from "../../store/reducers/catalog";
import {AddItemToCard, RemoveItemFromCard} from "../../store/reducers/cart/actions";
import Filter from "../filters/filter";
import {TCartState} from "../../store/reducers/cart";
import ItemsMain from "../itemsMain/itemsMain";
import {TApplicationState} from "../../store/aplication-state";
import {CloseNotification, ShowNotification} from "../../store/reducers/notification/actions";

const Catalog = () => {
    const dispatch = useDispatch()

    const items = useSelector<TApplicationState, TCatalogState>(state => state.catalog)
    const itemsOnCart = useSelector<TApplicationState, TCartState>(state => state.cart)

    let itemsToShow = items

    const searchQuery = useSelector<TApplicationState, string>(state => state.filter.searchQuery)
    const inMarketStatus = useSelector<TApplicationState, boolean>(state => state.filter.inMarket)
    const minPrice = useSelector<TApplicationState, number>(state => state.filter.minPrice)


    const maxPrice = useSelector<TApplicationState, number>(state => state.filter.maxPrice)


    if (searchQuery) {
        // itemsToShow = items.filter(item => item.title.includes(searchQuery))
    }

    if (inMarketStatus) {
        console.log('Market')
    }

    // itemsToShow = items.filters(item => item.cost > minPrice)


    const addToCart = (itemId: string) => {
        dispatch(AddItemToCard(itemId))
    }

    const removeFromCart = (itemId: string) => {
        dispatch(RemoveItemFromCard(itemId))
    }

    return (
        <>
            <Filter/>
            <ItemsMain addToCart={addToCart}/>
        </>
    );
};

export default Catalog;