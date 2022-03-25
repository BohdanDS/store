import React from 'react';
import PriceFilter from "./Price-filter/Price-filter";
import ProducerFilter from "./Producer-filter/Producer-filter";
import './index.less'
import InMarketFilter from "./InMarket-filter/InMarket-filter";

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