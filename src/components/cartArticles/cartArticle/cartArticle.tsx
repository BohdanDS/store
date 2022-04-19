import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox} from "antd";
import {DecreaseItemCount} from "../../../store/reducers/cart/actions";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import './index.less'
import {TApplicationState} from "../../../store/aplication-state";
import {IItem} from "../../../models/catalogItems";
import {CardActionsType} from "../../../store/reducers/cart/action-types";
import {CatalogActionType} from "../../../store/reducers/catalog/actions-types";

type CartArticleType = {
    itemId: number
    checkboxHandler: (list: string[]) => void
    values: string[]
}


const CartArticle = ({itemId, checkboxHandler, values}: CartArticleType) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: CatalogActionType.START_LOAD_ITEM_BY_ID, id: itemId})
    })

    const articleOnCart = useSelector<TApplicationState, IItem | undefined>(state => state.catalog.items.find(item => item.id === itemId))
    const itemOnCart = useSelector<TApplicationState, number>(state => state.cart[itemId])

    const checkboxValue = values.includes(String(itemId))

    const onChange = () => {
        if (!values.includes(String(itemId))) {
            values = [...values, String(itemId)]
        } else {
            values = values.filter(article => article !== String(itemId))
        }
        checkboxHandler(values)
    }

    const increaseItemHandler = () => {
        dispatch({type: CardActionsType.START_ADDING_ITEM_TO_CARD, itemId})
    }

    const decreaseItemHandler = () => {
        dispatch({type: CardActionsType.START_REMOVING_ITEM_FROM_CARD, itemId: Number(itemId)})
    }

    return (
        <div className='cartArticle-container'>
            {articleOnCart && <>
                <div className='cartArticle-container__titleBlock'>
                    <div style={{display: "flex"}}>
                        <Checkbox onChange={onChange} checked={checkboxValue}/>
                        <h3 className='cartArticle-container__articleTitle'>{articleOnCart.title}</h3>
                    </div>
                    <div>
                        <h4>{articleOnCart.price}$</h4>
                    </div>
                </div>
                <div className='cartArticle-container__dividerBlock'/>
                <div className='cartArticle-container__description'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                        the
                        leap into electronic</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                        the
                        leap into electronic</p>
                </div>
                <div className='cartArticle-container__countBlock'>
                    <Button onClick={increaseItemHandler}><PlusOutlined/></Button>
                    <p>{itemOnCart}</p>
                    <Button onClick={decreaseItemHandler} disabled={itemOnCart === 0}><MinusOutlined/></Button>
                </div>
            </>}
        </div>
    );
};

export default CartArticle;