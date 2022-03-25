import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {ItemType} from "../../store/Catalog-reducer/catalog-reducer";
import './index.less'
import {Button} from "antd";
import {AddItemToCard} from "../../store/Card-reducer/actions";



const Item = () => {
    const history = useHistory()
    const id = history.location.pathname.slice(9)
    const item = useSelector<AppRootStateType, ItemType[]>(state => state.catalog.filter(item=>item.id ===id))

    const dispatch = useDispatch()

    const addToCard = (itemId: string) => {
        dispatch(AddItemToCard(itemId))
    }

    return (
        <div className='wrapper'>
            <div className='item-container'>
                <div>
                    <img className='item-image' src='https://image.shutterstock.com/z/stock-vector-vector-line-icon-for-img-2050481222.jpg'/>
                </div>
                <div className='item-short-description'>
                    <h2>{item[0].title}</h2>
                    <div>
                        {item[0].available ?
                            <div>
                                <h3>Available in Market</h3>
                                <p>Size:</p>
                                <p>Vendor Code:</p>
                                <p>Parameters:</p>
                                <h3>Price: {item[0].cost}$</h3>
                                <Button onClick={()=>addToCard(item[0].id)}>Add to Card</Button>
                            </div>
                            :<div>Currently not available</div>}
                    </div>
                </div>
            </div>
            <div className='item-full-description'>
                <h3>Full Description:</h3>
                <p>
                    {item[0].description}
                </p>
                <p className='maker'>
                    Maker: {item[0].maker}
                </p>
            </div>
        </div>
    );
};

export default Item;