import React, {useState, ChangeEvent} from 'react';
import {Col, Input, Row, Slider} from "antd";

const PriceFilter = () => {

    const [minValue, setMinValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState<string>('100')

    const minValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setMinValue(e.currentTarget.value)
    }

    const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    const sliderHandler = (value: [number, number]) =>{
        setMinValue(value[0].toString())
        setMaxValue(value[1].toString())
    }

    return (
        <div className="site-input-group-wrapper">
            <Input.Group size="small">
                <Row gutter={8}>
                    Price From:
                    <Col span={5}>
                        <Input value={minValue} type='number' onChange = {minValueHandler}/>
                    </Col>
                    To:
                    <Col span={8}>
                        <Input value = {maxValue} type='number' onChange = {maxValueHandler}/>
                    </Col>
                </Row>
            </Input.Group>
            <div>
                <Slider range defaultValue={[0, 100]} value={[Number(minValue), Number(maxValue)]} onChange={sliderHandler}/>
            </div>
        </div>
    );
};

export default PriceFilter;