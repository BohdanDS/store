import React, {useState} from 'react';
import {Button, Card} from "antd";
import {Link, useHistory} from "react-router-dom";
import {useCardHandlers} from "./card.hooks";

type CardPropsType = {
    title: string,
    price: number
    id: string
    addToCard: (id: string) => void
    removeFromCard: (id: string) => void
}

const CardComponent = ({title, price, id, addToCard, removeFromCard}: CardPropsType) => {

    const history = useHistory();

    const {viewOnHover, onLooseFocus, onFocus} = useCardHandlers()

    const addItemToCard = () => {
        addToCard(id)
    }
    const removeItemFromCard = () => {
        removeFromCard(id)
    }


    const {Meta} = Card;
    return (
        <div style={{margin: '15px', position: 'relative'}} onMouseEnter={onFocus} onMouseLeave={onLooseFocus}>
            {viewOnHover && <div style={{position: 'absolute', top: '120px', right: '70px', zIndex:'10'}}>
                <Button onClick={addItemToCard}>Add to Card</Button>
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

export default CardComponent;