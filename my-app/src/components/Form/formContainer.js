import { useState } from 'react';
import { FormLayout } from './formLayout';
import { onAdd } from '../../handlers/onAdd';
import { onChange } from '../../handlers/onChange';
import { onSearchContent } from '../../handlers/onSearchContent';
import { onSortedContent } from '../../handlers/onSortedContent';

export const FormContainer = (props) => {
	const [input, setInput] = useState('');
	const [disabled, setDisabled] = useState(true);

	const {
		refreshTodos,
		setRefreshTodos,
		sortFlag,
		setSortFlag,
		setSearchContent,
		setSearchFlag,
	} = props;

	const handlerAddTodo = () => {
		return onAdd(input, setInput, refreshTodos, setRefreshTodos, setDisabled);
	};
	const handlerSortedContent = () => {
		return onSortedContent(sortFlag, setSortFlag, refreshTodos, setRefreshTodos);
	};
	const handlerSearchContent = (target) => {
		return onSearchContent(
			target,
			setSearchContent,
			refreshTodos,
			setRefreshTodos,
			setSearchFlag,
		);
	};

	const handlerChange = (target) => {
		return onChange(target, setDisabled, setInput);
	};

	const state = {
		input,
		setInput,
		disabled,
		setDisabled,
		handlerAddTodo,
		handlerSortedContent,
		handlerSearchContent,
		handlerChange,
		...props,
	};

	return <FormLayout {...state} />;
};
