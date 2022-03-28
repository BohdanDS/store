import React, {ChangeEvent, useState} from 'react';
import {Input} from 'antd';
import './index.less';
import {useDispatch} from "react-redux";

import {SetSearchQuery} from "../../store/filter-reducer/actions";


const Search = () => {
    const {Search} = Input;

    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useDispatch()

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const searchHandler = (value: string) => {
        dispatch(SetSearchQuery(value))
    }

    return (
        <div className='flex-center'>
            <Search value={inputValue} className='searchInput' placeholder='Search Amazon' onChange={inputHandler}
                    onSearch={searchHandler}/>
        </div>
    );
};

export default Search;