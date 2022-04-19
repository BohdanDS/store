import React, {FC, useEffect, useState} from 'react';
import ViewControls from "../viewControls /viewControls";
import ArticleList from "../article/article";
import {useDispatch, useSelector} from "react-redux";
import {TCatalogState} from "../../store/reducers/catalog";
import {Button, Pagination} from "antd";
import {Link} from "react-router-dom";
import './index.less'
import Rating from "../rating/rating";
import {TApplicationState} from "../../store/aplication-state";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";


type Props = {
    addToCart?: (articleId: number) => void
}

const ItemsMain: FC<Props> = ({addToCart}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: CatalogActionType.START_LOAD_ARTICLES, page: catalog.currentPage - 1})
        setListView(localStorage.getItem('ListView') === 'true')
    }, [])

    const catalog = useSelector<TApplicationState, TCatalogState>(state => state.catalog)
    const items = catalog.items

    const [listView, setListView] = useState(false)

    const changeView = (listView: boolean) => {
        localStorage.setItem('ListView', String(listView));
        setListView(listView)
    }

    const onChange = (value: number) => {
        dispatch({type: CatalogActionType.START_LOAD_ARTICLES, page: value - 1})
    }

    return (
        <>
            <div className='viewControlsBlock'><ViewControls callback={changeView} value={listView}/></div>
            {(!listView) ? <div style={{display: "flex", flexWrap: "wrap"}}>
                    {
                        items.map(item => {
                            return (
                                <ArticleList key={item.id} title={item.title} price={item.price}
                                             id={item.id}
                                             addToCart={addToCart} rating={5}/>
                            )
                        })
                    }
                </div>
                : <>
                    {items.map(item => {
                        return (
                            <div key={item.id} className='listArticle-container'>
                                <div className='listArticle-container__image'>
                                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                                </div>
                                <div className='listArticle-container__textArea'>
                                    <Link to={`catalog/${item.id}`}>
                                        <div className='listArticle-container__titlePrice'>
                                            <h3>{item.title}</h3>
                                            <h4>{item.price}$</h4>
                                        </div>
                                    </Link>
                                    {addToCart &&
                                        <Button onClick={() => addToCart(item.id)}>Add to Cart</Button>}
                                    <div className="listArticle-container__description">
                                        {/*<p>{item.description}</p>*/}
                                        <Rating rating={5} articleId={item.id}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
            <Pagination current={catalog.currentPage} total={catalog.totalCount} pageSize={catalog.pageSize}
                        onChange={onChange}/>
        </>
    );
};

export default ItemsMain;