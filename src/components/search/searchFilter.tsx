import React, {ChangeEvent, useState} from 'react';
import {Input} from 'antd';
import './index.less';
import {useDispatch} from "react-redux";
import {AddSearchStringFilterValue, StartFetchArticles} from "../../store/reducers/catalog/actions";
import {CatalogActionType} from "../../store/reducers/catalog/actions-types";
import useDebounce from "../../hooks/useDebounce";

const {Search} = Input;

const SearchFilter = () => {

	const [inputValue, setInputValue] = useState<string>('')
	const dispatch = useDispatch()


	const searchDispatch = (value: string) => {
		dispatch(AddSearchStringFilterValue(value))
		dispatch(StartFetchArticles())
	}

	const searchDispatchDebounce = useDebounce(searchDispatch, 500)

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
		searchDispatchDebounce(e.currentTarget.value)
	}


	const searchHandler = (value: string) => {
		dispatch(AddSearchStringFilterValue(value))
		dispatch(StartFetchArticles())
	}

	return (
		<div className='flex-center'>
			<Search value={inputValue} className='searchInput' placeholder='Search Amazon' onChange={inputHandler}
			        onSearch={searchHandler}/>
		</div>
	);
};

export default SearchFilter;