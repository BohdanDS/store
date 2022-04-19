import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TCartState} from "../../store/reducers/cart";
import CartArticle from "./cartArticle/cartArticle";
import './index.less'
import {Button, Checkbox} from "antd";
import {isEmptyArray} from "formik";
import {RemoveItemFromCard} from "../../store/reducers/cart/actions";
import {TApplicationState} from "../../store/aplication-state";

const CartArticles = () => {

    // @ts-ignore
    const articlesInCart = (Object.keys(useSelector<TApplicationState, TCartState>(state => state.cart)))
    console.log('111',articlesInCart)
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
            dispatch(RemoveItemFromCard(Number(article)))
        })
    }
    console.log(articlesInCart)
    return (
        <div className='cartArticles-container'>
            {isEmptyArray(articlesInCart) && <div><h4>Cart is empty</h4></div>}
            {!isEmptyArray(articlesInCart) && <div>
                {/*{*/}
                {/*    articlesInCart.map(id => (<CartArticle*/}
                {/*            itemId={Number(id)} key={id}*/}
                {/*                checkboxHandler={checkboxHandler}*/}
                {/*                values={checkItems.checkedList}/>*/}
                {/*        )*/}
                {/*    )*/}
                {/*}*/}
                {
                    articlesInCart.map(itemId=>{
                        console.log('Item ID map',itemId)
                        return (
                            <div><CartArticle itemId={Number(itemId)} checkboxHandler={checkboxHandler} values={checkItems.checkedList}/></div>
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