import React, {ChangeEvent, useState} from 'react';
import {Input} from 'antd';
import './index.less';
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../../store/search-reducer";


const Search = () => {
    const {Search} = Input;

    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useDispatch()

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const searchHandler = (value:string) => {
        console.log(value)
        dispatch(setSearchQuery(value))
        setInputValue('')
    }

    return (
        <div className='flex-center'>
            <Search value={inputValue} className='searchInput' placeholder='Поиск по таварам' onChange={inputHandler} onSearch={searchHandler}/>
        </div>
    );
};

export default Search;