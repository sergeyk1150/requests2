import { TodosLayout } from './todosLayout';
import { onDelete } from '../../handlers/onDelete';
import { onChangeContent } from '../../handlers/onChangeContent';

export const TodosContainer = (props) => {
	const { setTodos, refreshTodos, setRefreshTodos, setChangeContent, setId } = props;
	const handlerDelete = (id) => {
		return onDelete(id, setTodos, refreshTodos, setRefreshTodos);
	};
	const handlerChangeContent = (id) => {
		return onChangeContent(
			id,
			setChangeContent,
			setId,
			refreshTodos,
			setRefreshTodos,
		);
	};
	const state = {
		...props,
		handlerDelete,
		handlerChangeContent,
	};

	return <TodosLayout {...state} />;
};
