import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Container from './components/Container';

function App() {

	const [input, setInput] = useState('');//form
	const [deleteItems, setDeleteItems] = useState([]);
	const [completeItems, setCompleteItems] = useState([]);
	const [activeItems, setActiveItems] = useState([]);
	
	const [filteredItems, setFilteredItems] = useState([]);
	const [filter, setFilter] = useState('');

	const todos = [];

	const addItemHandler = () => {
		setFilteredItems(todos.concat([input]));//add
		setInput('')
	};
	const deleteHandler = (id) => {
		setFilteredItems(filteredItems.filter((item, index) => index !== id));
		setActiveItems(activeItems.filter((item, index) => index !== id));
		let deletedItem = filteredItems.filter((item, index) => index === id);
		setDeleteItems([...deleteItems, deletedItem.join('')]);
	};

	const completeHandler = (id) => {
		setFilteredItems(filteredItems.filter((item, index) => index !== id));
		setActiveItems(activeItems.filter((item, index) => index !== id));
		let completedItem = filteredItems.filter((item, index) => index === id);
		setCompleteItems([...completeItems, completedItem.join('')]);
	};

	const filterHandler = (e) => {
		let option = e.target.value;
		if (option === 'completed') {
			setFilteredItems(completeItems);
		} else if (option === 'deleted') {
			setFilteredItems(deleteItems);
		} else if (option === 'active') {
			setFilteredItems(activeItems);
		}
	};

	const editHandler = (id) => {
		let todoItem = filteredItems.find((todo, index) => index === id);
		setInput(todoItem);//input edit
		setFilteredItems(filteredItems.filter((item, index) => index !== id));//active state
	};

	return (
		<div className='app'>
			<Title />
			<Form
				getInput={setInput}
				input={input}
				addItemHandler={addItemHandler}
			/>
			<Container
				filteredItems={filteredItems}
				deleteHandler={deleteHandler}
				completeHandler={completeHandler}
				filterHandler={filterHandler}
				setFilter={setFilter}
				filter={filter}
				editHandler={editHandler}
			/>
		</div>
	);
}

export default App;