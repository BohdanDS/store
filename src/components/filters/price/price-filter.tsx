import React, {ChangeEvent, useState} from 'react';
import {Slider} from "antd";
import './index.less'
import {useDispatch} from "react-redux";
import {AddPriceFilterValue} from "../../../store/reducers/catalog/actions";
import useDebounce from "../../../hooks/useDebounce";

const PriceFilter = () => {
    const dispatch = useDispatch()
    const debounceInput = useDebounce(dispatch, 500)

    const [priceValues, setPriceValues] = useState<[number, number]>([0, 9999])

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(AddPriceFilterValue([Number(e.currentTarget.value), priceValues[1]]))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(AddPriceFilterValue([priceValues[0], Number(e.currentTarget.value)]))
    }

    const sliderHandler = (value: [number, number]) => {
        setPriceValues(value)
        debounceInput(AddPriceFilterValue(value))
    }

    return (
        <div className='priceFilter-container'>
            <div className="site-input-group-wrapper">
                <span className='priceFilter-container__span-1'>Price From:</span>
                <input
                    type='number'
                    min={0}
                    value={priceValues[0]}
                    onChange={minValueHandler}
                />
                <span className='priceFilter-container__span-2'>To:</span>
                <input
                    type='number'
                    max={9999}
                    value={priceValues[1]}
                    onChange={maxValueHandler}
                />
                <div>
                    <Slider className='priceFilter-container__slider' range={true}
                            defaultValue={[0, 9999]}
                            value={priceValues}
                            onChange={sliderHandler}
                            max={9999}
                            min={0}/>
                </div>
            </div>
        </div>

    );
};

export default PriceFilter;