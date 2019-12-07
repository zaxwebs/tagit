import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import ThemeContext from './../contexts/ThemeContext'

const ThemeToggler = () => {
	const { getDark, toggleDark } = useContext(ThemeContext)
	return (
		<Button
			onClick={() => {
				toggleDark()
			}}
		>
			{getDark() ? 'Light Mode' : 'Dark Mode'}
		</Button>
	)
}

export default ThemeToggler
