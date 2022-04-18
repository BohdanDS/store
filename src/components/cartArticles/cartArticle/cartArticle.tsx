import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox} from "antd";
import {AddItemToCard, DecreaseItemCount} from "../../../store/reducers/cart/actions";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import './index.less'
import {TApplicationState} from "../../../store/aplication-state";
import {IItem} from "../../../models/catalogItems";

type CartArticleType = {
    id: string
    checkboxHandler: (list: string[]) => void
    values: string[]
}


const CartArticle = ({id, checkboxHandler, values}: CartArticleType) => {

    const dispatch = useDispatch()
    const articleOnCart = useSelector<TApplicationState, IItem[]>(state => state.catalog.items.filter(item => item.id === Number(id)))
    const itemOnCart = useSelector<TApplicationState, number>(state => state.cart[id])

    const checkboxValue = values.includes(String(id))

    const onChange = () => {
        // if (!values.includes(String(id))) {
        //     values = [...values, id]
        // } else {
        //     values = values.filter(article => article !== id)
        // }
        // checkboxHandler(values)
    }

    const increaseItemHandler = () => {
        dispatch(AddItemToCard(Number(id)))
    }

    const decreaseItemHandler = () => {
        if (itemOnCart > 0) {
            dispatch(DecreaseItemCount(Number(id)))
        }
    }

    return (
        <div className='cartArticle-container'>
            {articleOnCart && <>
                <div className='cartArticle-container__titleBlock'>
                    <Checkbox onChange={onChange} checked={checkboxValue}/>
                    {/*<h3 className='cartArticle-container__articleTitle'>{articleOnCart.title}</h3>*/}
                </div>
                <div className='cartArticle-container__dividerBlock'/>
                {/*<h2>{articleOnCart}$</h2>*/}
                {/*<p>{articleOnCart.description}</p>*/}
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