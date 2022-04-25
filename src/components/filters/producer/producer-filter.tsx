import React, {useEffect} from 'react';
import {Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {SelectProducer} from "../../../store/reducers/filter/actions";
import './index.less'
import {TApplicationState} from "../../../store/aplication-state";
import {CategoryActionsType} from "../../../store/reducers/category/action-types";
import {ICategory} from "../../../models/category";
import {CatalogActionType} from "../../../store/reducers/catalog/actions-types";
import {AddCategoryFilterValue, StartFetchArticles} from "../../../store/reducers/catalog/actions";
import {StartCategoryFetching} from "../../../store/reducers/category/actions";

const {Option} = Select;

const ProducerFilter = () => {

    useEffect(() => {
        dispatch(StartCategoryFetching())
    }, [])

    const categories = useSelector<TApplicationState, ICategory[]>(state => state.category)
    const dispatch = useDispatch()

    const selectProps = {
        mode: 'multiple' as const,
        style: {width: '500px'},
        onChange: (newValue: number[]) => {
            const valueToNumber = newValue.map(id => Number(id))
            dispatch(AddCategoryFilterValue(valueToNumber))
            dispatch(StartFetchArticles())
        },
        placeholder: 'Select producer...',
        maxTagCount: 'responsive' as const,
    };


    return (
        <div className='producerFilter-container'>

            <div>
                <span>Producer:</span>
            </div>
            <Select {...selectProps} className='producerFilter-container__select'>
                {categories.map(item => {
                    return (
                        <Option id={Number(item.id)} key={Number(item.id)}>{item.title}</Option>
                    )
                })}
            </Select>
        </div>
    );
};

export default ProducerFilter;