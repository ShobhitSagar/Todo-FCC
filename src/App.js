import { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "Take out trash",
			completed: true,
		},
		{
			id: 2,
			text: "Grocery Shopping",
			completed: false,
		},
		{
			id: 3,
			text: "Learn react",
			completed: true,
		},
		{
			id: 4,
			text: "Swimming",
			completed: false,
		},
	]);

	useEffect(() => {
		localStorage.setItem("Todos", JSON.stringify(todos));
	});

	return (
		<div className="App">
			{todos.map((todo) => (
				<TodoItem key={todo.id} data={todo} todos={todos} setTodos={setTodos} />
			))}
		</div>
	);
}

export default App;
