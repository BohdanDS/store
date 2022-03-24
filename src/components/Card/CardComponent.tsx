import React, {useState} from 'react';
import {Button, Card} from "antd";

type CardPropsType = {
    title: string,
    price: number
    id: string
    addToCard:(id:string)=>void
    removeFromCard:(id:string)=>void
}

const CardComponent = ({title, price, id, addToCard, removeFromCard}: CardPropsType) => {

    const [viewOnHover, setViewOnHover] = useState<boolean>(false)

    const onFocus = () => {
        setViewOnHover(true)
    }

    const onLooseFocus = () => {
        setViewOnHover(false)
    }

    const addItemToCard = () => {
        addToCard(id)
    }
    const removeItemFromCard = ()=> {
        removeFromCard(id)
    }

    const {Meta} = Card;
    return (
        <div style={{margin: '15px', position: 'relative'}} onMouseEnter={onFocus} onMouseLeave={onLooseFocus}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
            >
                {viewOnHover && <div style={{position: 'absolute', top: '120px', right: '70px'}}>
                    <Button onClick={addItemToCard}>Add to Card</Button>
                    <Button onClick={removeItemFromCard}>Remove Item</Button>
                </div>}
                <Meta title={title} description={price + '$'}/>
            </Card>
        </div>
    );
};

export default CardComponent;