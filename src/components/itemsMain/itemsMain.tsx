import React, {FC, useEffect, useState} from 'react';
import ViewControls from "../viewControls /viewControls";
import ArticleList from "../article/article";
import {useSelector} from "react-redux";
import {TCatalogState} from "../../store/reducers/catalog";
import {Button, Pagination} from "antd";
import {Link} from "react-router-dom";
import './index.less'
import Rating from "../rating/rating";
import {TApplicationState} from "../../store/aplication-state";

type Props = {
    addToCart?: (articleId: string) => void
}

const ItemsMain: FC<Props> = ({addToCart}) => {

    useEffect(() => {
        setListView(localStorage.getItem('ListView') === 'true')
    }, [])

    const items = useSelector<TApplicationState, TCatalogState>(state => state.catalog)
    const arrOfKeys = Object.keys(items)
    const [listView, setListView] = useState(false)

    const changeView = (listView: boolean) => {
        localStorage.setItem('ListView', String(listView));
        setListView(listView)
    }

    return (
        <>
            <div className='viewControlsBlock'><ViewControls callback={changeView} value={listView}/></div>
            {(!listView) ? <div style={{display: "flex", flexWrap: "wrap"}}>
                    {
                        arrOfKeys.map(articleId => {
                            return (
                                <ArticleList key={articleId} title={items[articleId].title} price={items[articleId].cost}
                                             id={items[articleId].id}
                                             addToCart={addToCart} rating={items[articleId].rating}/>
                            )
                        })
                    }
                </div>
                : <>
                    {arrOfKeys.map(articleId => {
                        return (

                            <div className='listArticle-container'>
                                <div className='listArticle-container__image'>
                                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                                </div>
                                <div className='listArticle-container__textArea'>
                                    <Link to={`catalog/${articleId}`}>
                                        <div className='listArticle-container__titlePrice'>
                                            <h3>{items[articleId].title}</h3>
                                            <h4>{items[articleId].cost}$</h4>
                                        </div>
                                    </Link>
                                    {addToCart &&
                                        <Button onClick={() => addToCart(items[articleId].id)}>Add to Cart</Button>}
                                    <div className="listArticle-container__description">
                                        <p>{items[articleId].description}</p>
                                        <Rating rating={items[articleId].rating} articleId={items[articleId].id}/>
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