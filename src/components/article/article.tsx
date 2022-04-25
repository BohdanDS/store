import React from 'react';
import {Button, Card} from 'antd';
import {useHistory} from 'react-router-dom';
import {useHoverHandler} from './article.hook';
import './index.less'
import Rating from '../rating/rating';

const {Meta} = Card;

type ArticlePropsType = {
    title: string,
    price: number
    id: number
    addToCart?: (id: number) => void
    removeFromCart?: (id: string) => void
    rating: number
    img: string
}

const ArticleList = ({title, price, id, addToCart, img, rating}: ArticlePropsType) => {
    const {viewOnHover, onFocus, onLooseFocus} = useHoverHandler()

    let history = useHistory()

    const addItemToCard = () => {
        addToCart && addToCart(id)
    }

    const linkNavigation = (_event: any) => {
        history.push(`catalog/${id}`)
    }

    const ratingHandler = (event: any) => {
        event.stopPropagation()
    }


    return (
        <div className='ArticleList' style={{margin: '15px', position: 'relative'}} onMouseEnter={onFocus} onMouseLeave={onLooseFocus}>
            {viewOnHover && addToCart && (
                <div className='button-container'
                     style={{position: 'absolute', top: '120px', right: '70px', zIndex: '10'}}>
                    <Button onClick={addItemToCard}>Add to Cart</Button>
                </div>
            )}
            <div onClick={linkNavigation}>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" style={{width:'100%', height:'280px'}}
                                src={img ? img : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}/>}>
                    <Meta title={title} description={price + '$'}/>
                    <div onClick={ratingHandler}>
                        <Rating rating={rating} articleId={id}/>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ArticleList;