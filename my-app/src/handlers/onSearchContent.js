export const onSearchContent = (
	{ target },
	setSearchContent,
	refreshTodos,
	setRefreshTodos,
	setSearchFlag,
) => {
	setSearchContent(target.value);
	target.value ? setSearchFlag(true) : setSearchFlag(false);
	setRefreshTodos(!refreshTodos);
};
