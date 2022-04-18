import React, {useEffect} from 'react';
import {Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {SelectProducer} from "../../../store/reducers/filter/actions";
import './index.less'
import {TApplicationState} from "../../../store/aplication-state";
import {CategoryActionsType} from "../../../store/reducers/category/action-types";
import {ICategory} from "../../../models/category";

const ProducerFilter = () => {

    useEffect(() => {
        dispatch({type: CategoryActionsType.START_FETCHING_CATEGORIES})
    }, [])

    const categories = useSelector<TApplicationState, ICategory[]>(state => state.category)
    const selectedProducers = useSelector<TApplicationState, Array<string>>(state => state.filter.producers)
    const dispatch = useDispatch()


    const options = [];
    for (let i = 0; i < categories.length; i++) {
        const value = categories[i].title;
        options.push({
            value,
        });
    }
    console.log('options',options)
    const selectProps = {
        mode: 'multiple' as const,
        style: {width: '500px'},
        options,
        onChange: (newValue: string[]) => {
            console.log(newValue)
            dispatch(SelectProducer(newValue))
        },
        placeholder: 'Select producer...',
        maxTagCount: 'responsive' as const,
    };
    const onSelect =(value:any) => {
        console.log('onSelect', value)
    }


    return (
        <div className='producerFilter-container'>

            <div>
                <span>Producer:</span>
            </div>
            <Select {...selectProps} value={selectedProducers} className='producerFilter-container__select'/>
        </div>
    );
};

export default ProducerFilter;