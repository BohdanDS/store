import React, {ChangeEvent, useEffect, useState} from 'react';
import {useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './index.less'
import {Button, Input} from "antd";
import Rating from "../../components/rating/rating";
import {AddCommentToArticle, getArticleById, StartRemovingArticle} from "../../store/reducers/catalog/actions";
import {TApplicationState} from "../../store/aplication-state";
import {IItem} from "../../models/catalogItems";
import {CardActionsType} from "../../store/reducers/cart/action-types";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";
import {fakeDescription} from "../../models/fakeDescription";
import {USER_ROLES} from "../../models/feels";
import {AddItemToCartStartAction} from "../../store/reducers/cart/actions";
import {SelectRole} from "../../store/reducers/auth/selector";
import {SelectItemById} from "../../store/reducers/catalog/selectors";

const Item = () => {

	useEffect(() => {
		id && dispatch(getArticleById(id))
	})

	//Заглушка
	const currentUser = 'bhh'

	const id = useRouteMatch<{ id: string }>("/catalog/:id")?.params.id;


	const item = useSelector(SelectItemById(Number(id)))
	const role = useSelector(SelectRole())
	const dispatch = useDispatch()

	const [comment, setComment] = useState('')

	const commentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.currentTarget.value)
	}


	const addToCard = (itemId: number) => {
		dispatch(AddItemToCartStartAction(itemId))
	}

	const addCommentHandler = () => {
		id && dispatch(AddCommentToArticle(id, {
			author: currentUser,
			textComment: comment
		}))
		setComment('')
	}
	const removeArticle = () => {
		dispatch(StartRemovingArticle(Number(id)))
	}


	return (
		<div className='wrapper'>
			{item && <>
                <div className='item-container'>
                    <div>
                        <img className='item-image' alt={'image'}
                             src={item.img ? item.img : 'https://image.shutterstock.com/z/stock-vector-vector-line-icon-for-img-2050481222.jpg'}/>
                    </div>
                    <div className='item-short-description'>
                        <h2>{item.title}</h2>
                        <Rating rating={5} articleId={Number(id) || 1}/>
                        <div>
                            <div>
                                <h3>Available in Market</h3>
                                <p>Size:</p>
                                <p>Vendor Code:</p>
                                <p>Parameters:</p>
                                <h3>Price: {item.price}$</h3>
                                <Button onClick={() => addToCard(item.id)}>Add to Card</Button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='item-full-description'>
                    <h3>Full Description:</h3>
                    <p>
						{fakeDescription}
                    </p>
					{role === USER_ROLES.ADMIN_ROLE &&
                        <Button onClick={removeArticle} className='dangerous_button'>Remove Item</Button>
					}
					{/*<p className='maker'>*/}
					{/*    Maker: {item.maker}*/}
					{/*</p>*/}
                    <div className='comment-container'>
                        <h3>Leave a feedback:</h3>
                        <Input.TextArea value={comment} onChange={commentHandler}/>
                        <div className='comment-container__btn'>
                            <Button onClick={addCommentHandler}>Add</Button>
                        </div>
                    </div>
					{/*<Comments comments={item.comment}/>*/}
                </div>
            </>}
		</div>
	);
};

export default Item;