import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import ThemeContext from './../contexts/ThemeContext'
import { IoIosSunny, IoIosMoon } from 'react-icons/io'

const ThemeToggler = () => {
	const { getDark, toggleDark } = useContext(ThemeContext)
	return (
		<Button
			onClick={() => {
				toggleDark()
			}}
		>
			{getDark() ? (
				<>
					<IoIosSunny /> Light Mode
				</>
			) : (
				<>
					<IoIosMoon /> Dark Mode
				</>
			)}
		</Button>
	)
}

export default ThemeToggler
