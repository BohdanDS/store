import React, {FC, useState} from 'react';
import ViewControls from "../viewControls /viewControls";
import ArticleList from "../article/article";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {ItemType} from "../../store/catalog";
import {Button, Pagination} from "antd";
import './index.less'

type Props = {
    addToCart?: (articleId: string) => void
}

const ItemsMain: FC<Props> = ({addToCart}) => {

    const items = useSelector<AppRootStateType, ItemType[]>(state => state.catalog)
    const [listView, setListView] = useState(false)

    const changeView = (listView: boolean) => {
        setListView(listView)
        console.log(listView)
    }

    return (
        <>
            <div className='viewControlsBlock'><ViewControls callback={changeView} value={listView}/></div>
            {(!listView) ? <div style={{display: "flex", flexWrap: "wrap"}}>
                    {
                        items.map(item => {
                            return (
                                <ArticleList key={item.id} title={item.title} price={item.cost} id={item.id}
                                             addToCart={addToCart}/>
                            )
                        })
                    }
                </div>
                : <>
                    {items.map(item => {
                        return (
                            <div className='listArticle-container'>
                                <div className='listArticle-container__image'>
                                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                                </div>
                                <div className='listArticle-container__textArea'>
                                    <div className='listArticle-container__titlePrice'>
                                        <h3>{item.title}</h3>
                                        <h4>{item.cost}$</h4>
                                    </div>
                                    {addToCart && <Button onClick={() => addToCart(item.id)}>Add to Cart</Button>}
                                    <div className="listArticle-container__description">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
            <Pagination defaultCurrent={1} total={50}/>
        </>
    );
};

export default ItemsMain;