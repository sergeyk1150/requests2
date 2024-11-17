export const onAdd = (input, setInput, refreshTodos, setRefreshTodos, setDisabled) => {
	fetch('http://localhost:3003/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: `${input}`,
		}),
	})
		.then((responce) => {
			if (!responce.ok) {
				throw new Error('ошибка сервера');
			}
			setDisabled(true);
			setRefreshTodos(!refreshTodos);
		})
		.catch((error) => {
			console.error(error);
		})

		.finally(() => setInput(''));
};
