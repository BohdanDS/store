import React, {FC} from 'react';
import {Rate} from "antd";

type Props = {
    rating:number
    articleId:number
}

const Rating:FC<Props> = ({rating,articleId}) => {

    const clickHandler = (rate:number)=>{
        console.log(articleId, rate)
    }

    return (
        <Rate defaultValue={2.5} value={rating} onChange={clickHandler}/>
    );
};

export default Rating;