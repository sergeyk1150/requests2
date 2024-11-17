export const onChange = ({ target }, setDisabled, setInput) => {
	setInput(target.value);
	target.value ? setDisabled(false) : setDisabled(true);
};
