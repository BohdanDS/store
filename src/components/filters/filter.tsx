import React from 'react';
import PriceFilter from "./price/price-filter";
import './index.less'
import InMarketFilter from "./availiableInMarket/inMarket-filter";
import ProducerFilter from "./producer/producer-filter";

const Filter = () => {
    return (
        <div className='filter-container'>
           <div>
               <PriceFilter/>
           </div>
            <div>
                <ProducerFilter/>
            </div>
            <div>
                <InMarketFilter/>
            </div>
        </div>
    );
};

export default Filter;