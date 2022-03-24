import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import Card from "../Card/CardComponent";
import {ItemType} from "../../store/Catalog-reducer/catalog-reducer";
import {AddItemToCard, RemoveItemFromCard} from "../../store/Card-reducer/actions";

const Catalog = () => {

    const items = useSelector<AppRootStateType, ItemType[]>(state => state.catalog)

    const dispatch = useDispatch()

    const addToCard = (itemId: string) => {
        dispatch(AddItemToCard(itemId))
    }

    const removeFromCard = (itemId:string) => {
        dispatch(RemoveItemFromCard(itemId))
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                items.map(item => {
                    return (
                        <Card key={item.id} title={item.title} price={item.cost} id={item.id} addToCard={addToCard} removeFromCard={removeFromCard}/>
                    )
                })
            }
        </div>
    );
};

export default Catalog;