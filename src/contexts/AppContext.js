import React, { createContext, useState } from 'react'
import { initialNetworks, categories } from './../data'

const AppContext = createContext()

export const AppProvider = props => {
	const [networks, setNetworks] = useState(initialNetworks)
	const [content, setContent] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('webDesign')

	const toggleNetworkSelect = networkID => {
		const network = { ...networks[networkID] } // soft clone network
		network.selected = !network.selected // boolean
		setNetworks({ ...networks, [networkID]: network })
	}

	const handleContentChange = e => {
		setContent(e.target.value)
	}

	const handleCategorySelect = categoryID => {
		setSelectedCategory(categoryID)
	}

	return (
		<AppContext.Provider
			value={{
				networks,
				categories,
				toggleNetworkSelect,
				content,
				handleContentChange,
				selectedCategory,
				handleCategorySelect
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppContext
