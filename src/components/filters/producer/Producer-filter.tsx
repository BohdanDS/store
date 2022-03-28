import React from 'react';
import {Select, Space} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {SelectProducer} from "../../../store/filter-reducer/actions";

interface ItemProps {
    label: string;
    value: string;
}


const ProducerFilter = () => {

    const selectedProducers = useSelector<AppRootStateType, Array<string>>(state => state.filter.producers)
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
        <div className='manufacturerFilter-container'>
            <Space direction="vertical" style={{width: '90%'}}>
                Producer:
                <Select {...selectProps} value={selectedProducers} />
            </Space>
        </div>
    );
};

export default ProducerFilter;