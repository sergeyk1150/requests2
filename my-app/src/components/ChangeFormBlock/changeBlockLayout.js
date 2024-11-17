import styles from '../../App.module.css';

export const ChangeBlockLayout = (props) => {
	const {
		changeContent,
		inputChange,
		disabledChange,
		handlerChange,
		handlerRefresh,
		handlerClose,
	} = props;
	return (
		<>
			{changeContent && (
				<div className={styles['change-content']}>
					<label className={styles['change-content__label']}>
						Изменить задачу
					</label>
					<input
						className={styles['change-content__input']}
						onChange={handlerChange}
						value={inputChange}
					></input>
					<button
						className={styles.btn}
						onClick={handlerRefresh}
						disabled={disabledChange}
					>
						Отправить
					</button>
					<button className={styles.btn} onClick={handlerClose}>
						Закрыть
					</button>
				</div>
			)}
		</>
	);
};
