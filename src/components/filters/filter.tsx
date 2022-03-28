import React from 'react';
import PriceFilter from "./price/Price-filter";
import ProducerFilter from "./producer/Producer-filter";
import './index.less'
import InMarketFilter from "./availiableInMarket/InMarket-filter";

const Filter = () => {
    return (
        <div className='filter-container'>
            <PriceFilter/>
            <ProducerFilter/>
            <InMarketFilter/>
        </div>
    );
};

export default Filter;