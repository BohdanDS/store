import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {CreateNewCategory, RemoveCategory} from "../../store/reducers/category/actions";
import './index.less'
import {TApplicationState} from "../../store/aplication-state";
import {ICategory} from "../../models/category";
import Category from "./category/category";
import {CategoryActionsType} from "../../store/reducers/category/action-types";
import {ShowNotification} from "../../store/reducers/notification/actions";

const Categories = () => {

    const categories = useSelector<TApplicationState, ICategory[]>(state => state.category)
    console.log(categories)

    const dispatch = useDispatch()
    const [categoryValue, setCategoryValue] = useState<string>('')

    const categoryValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCategoryValue(e.currentTarget.value)
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>, id?: string, title?: string) => {
        if (e.key === 'Enter') {
            if (id && title) {
                // dispatch(UpdateCategory(id, title))

            } else {
                // dispatch(CreateNewCategory(categoryValue))
                setCategoryValue('')

            }
        }
    }

    const addCategoryHandler = () => {
        if (categoryValue) {
            dispatch({type: CategoryActionsType.START_NEW_CATEGORY_CREATION, title: categoryValue})
            setCategoryValue('')
            return
        }
        dispatch(ShowNotification({notificationType: 'error', description: '', message: 'Please Enter Title'}))
    }

    const removeCategory = (categoryId: number) => {
        dispatch({type: CategoryActionsType.START_REMOVING_CATEGORY, categoryId})
    }

    return (
        <>
            <div className='add-container'>
                <Input placeholder='Enter category name...' value={categoryValue} onChange={categoryValueHandler}
                       onKeyPress={onEnterHandler}/>
                <Button onClick={addCategoryHandler}>Add new Category</Button>
            </div>
            <div>
                {categories.map(category => {
                    return (
                        <Category key={category.id} onRemove={removeCategory} id={category.id} value={category.title}
                                  onEnter={onEnterHandler}/>
                    )
                })}
            </div>
        </>
    );
};

export default Categories;