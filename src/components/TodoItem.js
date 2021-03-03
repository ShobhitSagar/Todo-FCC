function TodoItem({ data, todos, setTodos }) {
	const checkListner = () => {
		setTodos(
			todos.map((item) => ({
				...item,
				completed: item.id === data.id ? !item.completed : item.completed,
			}))
		);
	};

	const textStyle = {
		fontStyle: "italic",
		textDecoration: "line-through",
		color: "#cdcdcd",
	};

	return (
		<div className="todo-item">
			<input onChange={checkListner} type="checkbox" checked={data.completed} />
			<p style={data.completed ? textStyle : null}>{data.text}</p>
		</div>
	);
}

export default TodoItem;
