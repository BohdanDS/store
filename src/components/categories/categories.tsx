import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CategoryType} from "../../store/reducers/category";
import {CreateNewCategory, RemoveCategory, UpdateCategory} from "../../store/reducers/category/actions";
import Category from "./category/category";
import './index.less'

const Categories = () => {

    const categories = useSelector<AppRootStateType, CategoryType>(state => state.category)
    const data = Object.keys(categories)
    const dispatch = useDispatch()
    const [categoryValue, setCategoryValue] = useState<string>('')

    const categoryValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCategoryValue(e.currentTarget.value)
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>, id?: string, title?: string) => {
        if (e.key === 'Enter') {
            if (id && title) {
                dispatch(UpdateCategory(id, title))

            } else {
                dispatch(CreateNewCategory(categoryValue))
                setCategoryValue('')

            }
        }
    }

    const addCategoryHandler = () => {
        dispatch(CreateNewCategory(categoryValue))
        setCategoryValue('')
    }

    const removeCategory = (categoryId: string) => {
        dispatch(RemoveCategory(categoryId))
    }

    return (
        <>
            <div className='add-container'>
                <Input placeholder = 'Enter category name...' value={categoryValue} onChange={categoryValueHandler} onKeyPress={onEnterHandler}/>
                <Button onClick={addCategoryHandler}>Add new Category</Button>
            </div>
            <div>
                {data.map(item => {
                    return (
                        <Category onRemove={removeCategory} id={item} value={categories[item]} onEnter={onEnterHandler}/>
                    )
                })}
            </div>
        </>
    );
};

export default Categories;