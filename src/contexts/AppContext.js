import React, { createContext, useState } from 'react'
import { initialNetworks, categories } from './../data'

const AppContext = createContext()

export const AppProvider = props => {
	const [networks, setNetworks] = useState(initialNetworks)

	const toggleNetworkSelect = networkID => {
		const network = { ...networks[networkID] } // soft clone network
		network.selected = !network.selected // boolean
		setNetworks({ ...networks, [networkID]: network })
	}

	return (
		<AppContext.Provider value={{ networks, categories, toggleNetworkSelect }}>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppContext
