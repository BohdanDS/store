import React from 'react';
import {Button, Card} from "antd";
import {Link} from "react-router-dom";
import {useHoverHandler} from "./article.hook";

type ArticlePropsType = {
    title: string,
    price: number
    id: string
    addToCart: (id: string) => void
    removeFromCart: (id: string) => void
}

const Article = ({title, price, id, addToCart, removeFromCart}: ArticlePropsType) => {

    const {viewOnHover, onFocus, onLooseFocus} = useHoverHandler()

    const addItemToCard = () => {
        addToCart(id)
    }
    // const removeItemFromCart = () => {
    //     removeFromCard(id)
    // }

    const {Meta} = Card;
    return (
        <div style={{margin: '15px', position: 'relative'}} onMouseEnter={onFocus} onMouseLeave={onLooseFocus}>
            {viewOnHover && <div style={{position: 'absolute', top: '120px', right: '70px', zIndex:'10'}}>
                <Button onClick={addItemToCard}>Add to Cart</Button>
            </div>}
            <Link to={`catalog/${id}`}>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                >
                    <Meta title={title} description={price + '$'}/>
                </Card>
            </Link>
        </div>
    );
};

export default Article;