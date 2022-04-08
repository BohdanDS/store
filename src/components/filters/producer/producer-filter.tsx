import React from 'react';
import {Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {SelectProducer} from "../../../store/reducers/filter/actions";
import './index.less'
import {TApplicationState} from "../../../store/aplication-state";

interface ItemProps {
    label: string;
    value: string;
}


const ProducerFilter = () => {

    const selectedProducers = useSelector<TApplicationState, Array<string>>(state => state.filter.producers)
    const dispatch = useDispatch()


    const options: ItemProps[] = [];
    for (let i = 0; i < 20; i++) {
        const value = i.toString() + i;
        options.push({
            label: `Long Label: ${value}`,
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
            <Select {...selectProps} value={selectedProducers} className='producerFilter-container__select' />
        </div>
    );
};

export default ProducerFilter;