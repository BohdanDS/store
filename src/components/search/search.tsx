import React, {ChangeEvent, useState} from 'react';
import {Input} from 'antd';
import './index.less';
import {useDispatch} from "react-redux";
import {AddSearchStringFilterValue} from "../../store/reducers/catalog/actions";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";
import useDebounce from "../../hooks/useDebounce";


const Search = () => {
    const {Search} = Input;

    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useDispatch()
    const debounceInput = useDebounce(dispatch, 500)
    const debounceRequest = useDebounce(dispatch, 501)

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        debounceInput(AddSearchStringFilterValue(e.currentTarget.value))
        debounceRequest({type: CatalogActionType.START_LOAD_ARTICLES, page: 0})
    }


    const searchHandler = (value: string) => {
        dispatch(AddSearchStringFilterValue(value))
        dispatch({type: CatalogActionType.START_LOAD_ARTICLES, page: 0})
    }

    return (
        <div className='flex-center'>
            <Search value={inputValue} className='searchInput' placeholder='Search Amazon' onChange={inputHandler}
                    onSearch={searchHandler}/>
        </div>
    );
};

export default Search;