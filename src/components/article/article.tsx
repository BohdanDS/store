import React from 'react';
import {Button, Card, Rate} from "antd";
import {Link} from "react-router-dom";
import {useHoverHandler} from "./article.hook";
import './index.less'
import Rating from "../rating/rating";

type ArticlePropsType = {
    title: string,
    price: number
    id: string
    addToCart?: (id: string) => void
    removeFromCart?: (id: string) => void
    rating: number
}

const ArticleList = ({title, price, id, addToCart, rating}: ArticlePropsType) => {
    const {viewOnHover, onFocus, onLooseFocus} = useHoverHandler()

    const addItemToCard = () => {
        addToCart && addToCart(id)
    }
    // const removeItemFromCart = () => {
    //     removeFromCard(id)
    // }
    const ratingHandler = (e: number) => {
        console.log(id, e)
    }

    const {Meta} = Card;
    return (
        <div style={{margin: '15px', position: 'relative'}} onMouseEnter={onFocus} onMouseLeave={onLooseFocus}>
            {viewOnHover && addToCart && <div className='button-container'
                                              style={{position: 'absolute', top: '120px', right: '70px', zIndex: '10'}}>
                <Button onClick={addItemToCard}>Add to Cart</Button>
            </div>}
            <Link to={`catalog/${id}`}>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                >
                    <Meta title={title} description={price + '$'}/>
                    {/*Запретить переход по ссылке*/}
                    <Rating rating={rating} articleId={id}/>
                </Card>
            </Link>
        </div>
    );
};

export default ArticleList;