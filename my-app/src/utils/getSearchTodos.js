export const getSearchTodos = (loadedTodos, searchContent) => {
	return loadedTodos.filter((todo) => {
		return todo.title.includes(searchContent);
	});
};
