import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import Article from "../article/article";
import {ItemType} from "../../store/catalog";
import {AddItemToCard, RemoveItemFromCard} from "../../store/cart/actions";
import Filter from "../filters/filter";
import {ItemCardType} from "../../store/cart";

const Catalog = () => {

    const items = useSelector<AppRootStateType, ItemType[]>(state => state.catalog)
    const itemsOnCart = useSelector<AppRootStateType, ItemCardType>(state => state.cart)

    let itemsToShow = items

    const searchQuery = useSelector<AppRootStateType, string>(state => state.filter.searchQuery)
    const inMarketStatus = useSelector<AppRootStateType, boolean>(state => state.filter.inMarket)
    const minPrice = useSelector<AppRootStateType, number>(state => state.filter.minPrice)


    const maxPrice = useSelector<AppRootStateType, number>(state => state.filter.maxPrice)


    if (searchQuery) {
        itemsToShow = items.filter(item => item.title.includes(searchQuery))
    }

    if (inMarketStatus) {
        itemsToShow = items.filter(item => item.available === true)
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
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    itemsToShow.map(item => {
                        return (
                            <Article key={item.id} title={item.title} price={item.cost} id={item.id}
                                     addToCart={addToCart}
                                     removeFromCart={removeFromCart}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Catalog;