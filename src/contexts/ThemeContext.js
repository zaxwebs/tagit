import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = props => {
	const [isDark, setDark] = useState(false)

	const getDark = () => {
		if (localStorage.getItem('isDark') === null) {
			return isDark
		} else {
			return JSON.parse(localStorage.getItem('isDark'))
		}
	}

	const toggleDark = () => {
		const opposite = !getDark()
		localStorage.setItem('isDark', opposite)
		setDark(opposite)
	}

	const getThemeClass = () => {
		return getDark() ? 'dark' : ''
	}

	return (
		<ThemeContext.Provider value={{ toggleDark, getThemeClass }}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeContext
