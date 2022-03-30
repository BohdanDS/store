import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {ItemCardType} from "../../store/cart";
import CartArticle from "./cartArticle/cartArticle";
import './index.less'
import {Button, Checkbox} from "antd";
import {isEmptyArray} from "formik";
import {RemoveItemFromCard} from "../../store/cart/actions";

const CartArticles = () => {

    const articlesInCart = Object.keys(useSelector<AppRootStateType, ItemCardType>(state => state.cart))
    const dispatch = useDispatch()

    const defaultCheckedList: string[] = [];
    const plainOptions = [...articlesInCart]

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checkAll, setCheckAll] = useState(false);

    const checkboxHandler = (list: any) => {
        setCheckedList(list)
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setCheckAll(e.target.checked);
    };

    const removeItemHandler = () => {
        checkedList.forEach(article => {
            dispatch(RemoveItemFromCard(article))
        })
    }

    return (
        <div className='cartArticles-container'>
            {!isEmptyArray(articlesInCart) ? <div>
                {
                    articlesInCart.map(id => {
                        return (
                            <CartArticle id={id} key={id} checkboxHandler={checkboxHandler} values={checkedList}/>
                        )
                    })
                }
                <div className='cartArticles-container__removeBlock'>
                    <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                        Select All
                    </Checkbox>
                    <Button disabled={isEmptyArray(checkedList)} onClick={removeItemHandler}>Remove from Cart</Button>
                </div>
            </div> : <div>
                <h4>Cart is empty</h4>
            </div>}

        </div>
    );
};

export default CartArticles;