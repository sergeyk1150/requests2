export const onDelete = (id, setTodos, refreshTodos, setRefreshTodos) => {
	fetch(`http://localhost:3003/todos/${id}`, {
		method: 'DELETE',
	})
		.then((responce) => {
			if (!responce.ok) {
				throw new Error('ошибка сервера');
			}
			setRefreshTodos(!refreshTodos);
		})
		.catch((error) => {
			console.error(error);
		});
};
