import React from 'react';
import {Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {SelectProducer} from "../../../store/reducers/filter/actions";
import './index.less'
import {TApplicationState} from "../../../store/aplication-state";
import {makersArray} from "../../../store/reducers/catalog/selectors";

const ProducerFilter = () => {

    const selectedProducers = useSelector<TApplicationState, Array<string>>(state => state.filter.producers)
    const uniqueMakers = Array.from(new Set(useSelector(makersArray())))
    const dispatch = useDispatch()


    const options = [];
    for (let i = 0; i < uniqueMakers.length; i++) {
        const value = uniqueMakers[i];
        options.push({
            value,
        });
    }
    const selectProps = {
        mode: 'multiple' as const,
        style: {width: '500px'},
        options,
        onChange: (newValue: string[]) => {
            dispatch(SelectProducer(newValue))
        },
        placeholder: 'Select producer...',
        maxTagCount: 'responsive' as const,
    };


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