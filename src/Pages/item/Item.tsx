import React from 'react';
import {useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {ItemType} from "../../store/catalog-reducer/catalog-reducer";
import './index.less'
import {Button} from "antd";
import {AddItemToCard} from "../../store/cart-reducer/actions";

const Item = () => {

    const id = useRouteMatch<{ id: string }>("/catalog/:id")?.params.id;
    const item = useSelector<AppRootStateType, ItemType | undefined>(state => state.catalog.find(item => item.id === id))

    const dispatch = useDispatch()

    const addToCard = (itemId: string) => {
        dispatch(AddItemToCard(itemId))
    }

    return (
        <div className='wrapper'>
            {item && <>
                <div className='item-container'>
                    <div>
                        <img className='item-image'
                             src='https://image.shutterstock.com/z/stock-vector-vector-line-icon-for-img-2050481222.jpg'/>
                    </div>
                    <div className='item-short-description'>
                        <h2>{item.title}</h2>
                        <div>
                            {item.available ?
                                <div>
                                    <h3>Available in Market</h3>
                                    <p>Size:</p>
                                    <p>Vendor Code:</p>
                                    <p>Parameters:</p>
                                    <h3>Price: {item.cost}$</h3>
                                    <Button onClick={() => addToCard(item.id)}>Add to Card</Button>
                                </div>
                                : <div>Currently not available</div>}
                        </div>
                    </div>
                </div>
                <div className='item-full-description'>
                    <h3>Full Description:</h3>
                    <p>
                        {item.description}
                    </p>
                    <p className='maker'>
                        Maker: {item.maker}
                    </p>
                </div>
            </>}
        </div>
    );
};

export default Item;