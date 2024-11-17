export const getSortedTodos = (loadedTodos) => {
	return loadedTodos.sort((a, b) => {
		let x = a.title < b.title ? -1 : 1;
		return x;
	});
};
