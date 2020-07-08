import React, { useState, useEffect } from 'react'
import AddForm from '../addForm/AddForm'
import Item from '../item/Item'
import Comments from '../comments/Comments'
import './todolist.scss'

const TodoList = () => {
	const [items, setItems] = useState([])
	const [selectedItem, setSelectedItem] = useState({})

	useEffect(() => {
		getItemsFromStorage()
	}, [])

	const create = item => {
		let newItemsList = [...items, item]
		setItemsToStorage(newItemsList)
	}

	const updateItem = item => {
		let newItemsList = items.map(elem => {
			if (elem.id === item.id) {
				return item
			}
			return elem
		})
		setItemsToStorage(newItemsList)
	}

	const deleteItem = (id, event) => {
		event.stopPropagation()
		let newItemsList = items.filter(elem => elem.id !== id)
		if (selectedItem.id === id) {
			selectItem(null)
		}
		setItemsToStorage(newItemsList)
	}

	const selectItem = (id, event) => {
		if (!event.target.className.includes('list-item__btn')) {
			return setSelectedItem(items.find(elem => elem.id === id))
		}
		setSelectedItem(items[0])
	}

	const getItemsFromStorage = () => {
		setItems(JSON.parse(localStorage.getItem('items')))
	}

	const setItemsToStorage = newList => {
		setItems(newList)
		localStorage.setItem('items', JSON.stringify(newList))
	}
	return (
		<div className='dayry-app'>
			<div className='todolist container '>
				<h1>Items</h1>
				<AddForm create={create} />
				<ul className='list-items'>
					{items &&
						items.map(elem => (
							<Item
								{...elem}
								key={elem.id}
								selectedItem={selectedItem}
								deleteItem={deleteItem}
								selectItem={selectItem}
							/>
						))}
				</ul>
			</div>
			<Comments selectedItem={selectedItem} updateItem={updateItem} />
		</div>
	)
}

export default TodoList
