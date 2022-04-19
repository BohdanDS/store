import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TCartState} from "../../store/reducers/cart";
import CartArticle from "./cartArticle/cartArticle";
import './index.less'
import {Button, Checkbox} from "antd";
import {isEmptyArray} from "formik";
import {TApplicationState} from "../../store/aplication-state";
import {CardActionsType} from "../../store/reducers/cart/action-types";

const CartArticles = () => {
    const articlesInCart = (Object.keys(useSelector<TApplicationState, TCartState>(state => state.cart)))
    const dispatch = useDispatch()

    const defaultCheckedList: string[] = [];
    const plainOptions = [...articlesInCart]

    const checkboxHandler = (list: any) => {
        setCheckItems({checkedList: list, checkAll: list.length === plainOptions.length})
    };

    const onCheckAllChange = (e: any) => {
        setCheckItems({checkedList: e.target.checked ? plainOptions : [], checkAll: e.target.checked})
    };

    const [checkItems, setCheckItems] = useState({checkedList: defaultCheckedList, checkAll: false})

    const removeItemHandler = () => {
        checkItems.checkedList.forEach(article => {
            // dispatch(RemoveItemFromCard(Number(article)))
            dispatch({type: CardActionsType.START_REMOVING_ITEM_FROM_CARD, itemId: Number(article)})
        })
    }
    console.log(articlesInCart)
    return (
        <div className='cartArticles-container'>
            {isEmptyArray(articlesInCart) && <div><h4>Cart is empty</h4></div>}
            {!isEmptyArray(articlesInCart) && <div>
                {
                    articlesInCart.map(itemId => {
                        return (
                            <CartArticle key={itemId} itemId={Number(itemId)} checkboxHandler={checkboxHandler}
                                         values={checkItems.checkedList}/>
                        )
                    })
                }
                <div className='cartArticles-container__removeBlock'>
                    <Checkbox
                        onChange={onCheckAllChange}
                        checked={checkItems.checkAll}>
                        Select All
                    </Checkbox>
                    <Button
                        disabled={isEmptyArray(checkItems.checkedList)}
                        onClick={removeItemHandler}>Remove from
                        Cart
                    </Button>
                </div>
            </div>}
        </div>
    );
};

export default CartArticles;