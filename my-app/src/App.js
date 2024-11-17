import { useEffect, useState } from 'react';
import { FormContainer } from './components/Form/formContainer';
import { TodosContainer } from './components/Todos/todosContainer';
import { ChangeBlockContainer } from './components/ChangeFormBlock/changeBlockContainer';
import { getLoadedTodosOrFilteredTodos } from './utils/getLoadedTodosOrFilteredTodos';
import styles from './App.module.css';

export const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [changeContent, setChangeContent] = useState(false);
	const [id, setId] = useState();
	const [searchContent, setSearchContent] = useState('');
	const [sortFlag, setSortFlag] = useState(false);
	const [searchFlag, setSearchFlag] = useState(false);

	const state = {
		isLoading,
		setIsLoading,
		todos,
		setTodos,
		refreshTodos,
		setRefreshTodos,
		changeContent,
		setChangeContent,
		id,
		setId,
		searchContent,
		setSearchContent,
		sortFlag,
		setSortFlag,
		searchFlag,
		setSearchFlag,
	};

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3003/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(
					getLoadedTodosOrFilteredTodos(loadedTodos, sortFlag, searchContent),
				);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodos, searchFlag, sortFlag, searchContent]);

	return (
		<div className={styles.app}>
			<h1>Todo list</h1>
			<FormContainer {...state} />
			<TodosContainer {...state} />
			<ChangeBlockContainer {...state} />
		</div>
	);
};
