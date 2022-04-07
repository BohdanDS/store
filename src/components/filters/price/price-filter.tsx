import React, {ChangeEvent} from 'react';
import {Slider} from "antd";
import './index.less'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {SetMaxPriceFilterValue, SetMinPriceFilterValue} from "../../../store/reducers/filter/actions";

const PriceFilter = () => {

    const minValue = useSelector<AppRootStateType, number>(state => state.filter.minPrice)
    const maxValue = useSelector<AppRootStateType, number>(state => state.filter.maxPrice)
    const dispatch = useDispatch()

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetMinPriceFilterValue(Number(e.currentTarget.value)))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetMaxPriceFilterValue(Number(e.currentTarget.value)))
    }

    const sliderHandler = (value: [number, number]) => {
        dispatch(SetMinPriceFilterValue(value[0]))
        dispatch(SetMaxPriceFilterValue(value[1]))
    }

    return (
        <div className='priceFilter-container'>
            <div className="site-input-group-wrapper">
                <span className='priceFilter-container__span-1'>Price From:</span>
                <input
                    type='number'
                    min={0}
                    value={minValue}
                    onChange={minValueHandler}
                />
                <span className='priceFilter-container__span-2'>To:</span>
                <input
                    type='number'
                    max={100}
                    value={maxValue}
                    onChange={maxValueHandler}
                />
                <div>
                    <Slider className='priceFilter-container__slider' range defaultValue={[minValue, maxValue]}
                            value={[Number(minValue), Number(maxValue)]}
                            onChange={sliderHandler}/>
                </div>
            </div>
        </div>

    );
};

export default PriceFilter;