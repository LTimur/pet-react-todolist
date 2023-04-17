import React, { useState, useEffect } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import { BsMoonFill } from "react-icons/bs";

const data = []

const Home = () => {
	// Dark theme feature
	const [theme, setTheme] = useState('light')

	useEffect(() => {
	  if(theme === 'dark') {
		document.documentElement.classList.add('dark');
	  } else {
		document.documentElement.classList.remove('dark');
	  }
	}, [theme])
	
	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light': 'dark')
	}

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
			<button onClick={handleThemeSwitch} className='float-right pr-10'>
				<BsMoonFill
					size={22}
					className='text-gray-500 hover:text-yellow-300 transition-colors ease-in-out duration-300 '
				/>
			</button>
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
