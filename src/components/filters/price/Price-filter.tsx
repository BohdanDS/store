import React, {ChangeEvent} from 'react';
import {Col, Input, Row, Slider} from "antd";
import './index.less'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {SetMaxPriceFilterValue, SetMinPriceFilterValue} from "../../../store/filter-reducer/actions";

const PriceFilter = () => {

    const minValueReducer = useSelector<AppRootStateType, number>(state => state.filter.minPrice)
    const maxValueReducer = useSelector<AppRootStateType, number>(state => state.filter.maxPrice)
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
        <div className="site-input-group-wrapper priceFilter-container">
            <Input.Group size="small">
                <Row gutter={8}>
                    Price From:
                    <Col span={5}>
                        <Input value={minValueReducer} type='number' onChange={minValueHandler}/>
                    </Col>
                    To:
                    <Col span={8}>
                        <Input value={maxValueReducer} type='number' onChange={maxValueHandler}/>
                    </Col>
                </Row>
            </Input.Group>
            <div>
                <Slider range defaultValue={[minValueReducer, maxValueReducer]} value={[Number(minValueReducer), Number(maxValueReducer)]}
                        onChange={sliderHandler}/>
            </div>
        </div>
    );
};

export default PriceFilter;