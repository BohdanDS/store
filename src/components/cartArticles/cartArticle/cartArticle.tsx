import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ItemType} from "../../../store/catalog";
import {Button, Checkbox} from "antd";
import {AddItemToCard, DecreaseItemCount} from "../../../store/cart/actions";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import './index.less'

type CartArticleType = {
    id: string
    checkboxHandler: (list: string[]) => void
    values: string[]
}


const CartArticle = ({id, checkboxHandler, values}: CartArticleType) => {

    const dispatch = useDispatch()
    const articleOnCart = useSelector<AppRootStateType, ItemType | undefined>(state => state.catalog.find(article => article.id === id))
    const itemOnCart = useSelector<AppRootStateType, number>(state => state.cart[id])

    const checkboxValue = values.includes(id)

    const onChange = () => {
        if (!values.includes(id)) {
            values = [...values, id]
        } else {
            values = values.filter(article => article !== id)
        }
        checkboxHandler(values)
    }

    const increaseItemHandler = () => {
        dispatch(AddItemToCard(id))
    }

    const decreaseItemHandler = () => {
        if (itemOnCart > 0) {
            dispatch(DecreaseItemCount(id))
        }
    }

    return (
        <div className='cartArticle-container'>
            {articleOnCart && <>
                <div className='cartArticle-container__titleBlock'>
                    <Checkbox onChange={onChange} checked={checkboxValue} />
                    <h3 className='cartArticle-container__articleTitle'>{articleOnCart.title}</h3>
                </div>
                <div className='cartArticle-container__dividerBlock'></div>
                <h2>{articleOnCart.cost}$</h2>
                <p>{articleOnCart.description}</p>
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