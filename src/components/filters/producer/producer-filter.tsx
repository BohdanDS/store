import React, {useEffect} from 'react';
import {Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import './index.less'
import {AddCategoryFilterValue, StartFetchArticles} from "../../../store/reducers/catalog/actions";
import {StartCategoryFetching} from "../../../store/reducers/category/actions";
import {categoriesSelector} from "../../../store/reducers/category/selectors";

const {Option} = Select;

const ProducerFilter = () => {

    useEffect(() => {
        dispatch(StartCategoryFetching())
    }, [])

    const categories = useSelector(categoriesSelector)
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