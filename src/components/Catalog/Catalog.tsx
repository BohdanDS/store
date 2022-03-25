import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import Card from "../Card/CardComponent";
import {ItemType} from "../../store/Catalog-reducer/catalog-reducer";
import {AddItemToCard, RemoveItemFromCard} from "../../store/Card-reducer/actions";

const Catalog = () => {

    const items = useSelector<AppRootStateType, ItemType[]>(state => state.catalog)

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

    // itemsToShow = items.filter(item => item.cost > minPrice)


    const dispatch = useDispatch()

    const addToCard = (itemId: string) => {
        dispatch(AddItemToCard(itemId))
    }

    const removeFromCard = (itemId: string) => {
        dispatch(RemoveItemFromCard(itemId))
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                itemsToShow.map(item => {
                    return (
                        <Card key={item.id} title={item.title} price={item.cost} id={item.id} addToCard={addToCard}
                              removeFromCard={removeFromCard}/>
                    )
                })
            }
        </div>
    );
};

export default Catalog;