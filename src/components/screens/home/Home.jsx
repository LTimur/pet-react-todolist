import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = []

const Home = () => {

	// Todos features
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center dark:text-white text-slate-900'>Todolist</h1>
			
			<CreateTodoField setTodos={setTodos} />
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
		</div>
	)
}

export default Home
