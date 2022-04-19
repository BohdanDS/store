import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import './index.less'
import {CardActionsType} from "../../../store/reducers/cart/action-types";

type CartArticleType = {
    itemId: number
    price: number
    title: string,
    img: null | string,
    checkboxHandler: (list: string[]) => void
    values: string[]
    itemOnCart: number
}


const CartArticle = ({itemId, checkboxHandler, values, img, title, price, itemOnCart}: CartArticleType) => {

    const dispatch = useDispatch()

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
            {<>
                <div className='cartArticle-container__titleBlock'>
                    <div style={{display: "flex"}}>
                        <Checkbox onChange={onChange} checked={checkboxValue}/>
                        <h3 className='cartArticle-container__articleTitle'>{title}</h3>
                    </div>
                    <div>
                        <h4>{price}$</h4>
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
                    {/*<Button onClick={increaseItemHandler}><PlusOutlined/></Button>*/}
                    {/*<p>{itemOnCart}</p>*/}
                    {/*<Button onClick={decreaseItemHandler} disabled={itemOnCart === 0}><MinusOutlined/></Button>*/}
                </div>
            </>}
        </div>
    );
};

export default CartArticle;