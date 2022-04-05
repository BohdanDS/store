import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import Article from "../article/article";
import {CatalogInitialState, ItemType} from "../../store/catalog";
import {AddItemToCard, RemoveItemFromCard} from "../../store/cart/actions";
import Filter from "../filters/filter";
import {ItemCardType} from "../../store/cart";
import ItemsMain from "../itemsMain/itemsMain";
import {ChangeInMarketToggle} from "../../store/filter/actions";

const Catalog = () => {

    const items = useSelector<AppRootStateType, CatalogInitialState>(state => state.catalog)
    const itemsOnCart = useSelector<AppRootStateType, ItemCardType>(state => state.cart)

    let itemsToShow = items

    const searchQuery = useSelector<AppRootStateType, string>(state => state.filter.searchQuery)
    const inMarketStatus = useSelector<AppRootStateType, boolean>(state => state.filter.inMarket)
    const minPrice = useSelector<AppRootStateType, number>(state => state.filter.minPrice)


    const maxPrice = useSelector<AppRootStateType, number>(state => state.filter.maxPrice)


    if (searchQuery) {
        // itemsToShow = items.filter(item => item.title.includes(searchQuery))
    }

    if (inMarketStatus) {
        console.log('123')
    }

    // itemsToShow = items.filters(item => item.cost > minPrice)


    const dispatch = useDispatch()

    const addToCart = (itemId: string) => {
        dispatch(AddItemToCard(itemId))
    }

    const removeFromCart = (itemId: string) => {
        dispatch(RemoveItemFromCard(itemId))
    }

    return (
        <>
            <Filter/>
            <ItemsMain addToCart = {addToCart}/>
        </>
    );
};

export default Catalog;