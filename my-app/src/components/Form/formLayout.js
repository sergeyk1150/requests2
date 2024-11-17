import styles from '../../App.module.css';

export const FormLayout = (props) => {
	const {
		input,
		handlerAddTodo,
		disabled,
		searchContent,
		handlerSortedContent,
		handlerSearchContent,
		handlerChange,
	} = props;
	return (
		<form className={styles.form}>
			<div className={styles.add}>
				<input onChange={handlerChange} value={input}></input>
				<button
					type="button"
					className={styles['btn']}
					onClick={handlerAddTodo}
					disabled={disabled}
				>
					Добавить задачу
				</button>
			</div>
			<input
				className={styles.input}
				onChange={handlerSearchContent}
				value={searchContent}
				placeholder="поиск"
			></input>
			<label>
				Сортировать по алфавиту
				<input
					type="checkbox"
					className={styles['btn']}
					onClick={handlerSortedContent}
				></input>
			</label>
		</form>
	);
};
