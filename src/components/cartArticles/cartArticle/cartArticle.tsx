import React from 'react';
import {useDispatch} from 'react-redux';
import {Checkbox} from 'antd';
import './index.less'
import {CardActionsType} from '../../../store/reducers/cart/action-types';
import {fakeDescription} from '../../../models/fakeDescription';

type CartArticleType = {
    itemId: number
    price: number
    title: string,
    img: null | string,
    checkboxHandler: (list: string[]) => void
    values: string[]
    itemOnCart: number
}


const CartArticle = ({itemId, checkboxHandler, values, title, price}: CartArticleType) => {

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

    return (
        <div className='cartArticle-container'>
            {<>
                <div className='cartArticle-container__titleBlock'>
                    <div style={{display: 'flex'}}>
                        <Checkbox onChange={onChange} checked={checkboxValue}/>
                        <h3 className='cartArticle-container__articleTitle'>{title}</h3>
                    </div>
                    <div>
                        <h4>{price}$</h4>
                    </div>
                </div>
                <div className='cartArticle-container__dividerBlock'/>
                <div className='cartArticle-container__description'>
                    <p>{fakeDescription}</p>
                    <p>{fakeDescription}</p>
                </div>
            </>}
        </div>
    );
};

export default CartArticle;