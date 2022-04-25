import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {cartProduct} from "../../store/reducers/cart";
import './index.less'
import {Button, Checkbox} from "antd";
import {isEmptyArray} from "formik";
import CartArticle from "./cartArticle/cartArticle";
import {arrayToObjArray} from "../../utils/arrayToObjArray";
import {DeleteFromCardStartAction} from "../../store/reducers/cart/actions";

type Props = {
    items: cartProduct[]
}

const CartArticles: FC<Props> = ({items}) => {

    const dispatch = useDispatch()

    const defaultCheckedList: string[] = [];
    const plainOptions = [...items.map(item => String(item.id))]

    const checkboxHandler = (list: any) => {
        setCheckItems({checkedList: list, checkAll: list.length === plainOptions.length})
    };

    const onCheckAllChange = (e: any) => {
        setCheckItems({checkedList: e.target.checked ? plainOptions : [], checkAll: e.target.checked})
    };

    const [checkItems, setCheckItems] = useState({checkedList: defaultCheckedList, checkAll: false})

    const removeItemHandler = () => {
        const itemsIdsObj = arrayToObjArray(checkItems.checkedList)
        dispatch(DeleteFromCardStartAction(itemsIdsObj))
    }
    return (
        <div className='cartArticles-container'>
            {isEmptyArray(items) && <div><h4>Cart is empty</h4></div>}
            {!isEmptyArray(items) && <div>
                {
                    items.map((item) => (
                        <CartArticle key={item.id}
                             itemId={item.id}
                             img={item.img}
                             price={item.price}
                             title={item.title}
                             checkboxHandler={checkboxHandler}
                             values={checkItems.checkedList}
                             itemOnCart={items.length}
                        />
                    ))
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