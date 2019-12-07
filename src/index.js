import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppProvider } from './contexts/AppContext'
import { ThemeProvider } from './contexts/ThemeContext'

ReactDOM.render(
	<AppProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</AppProvider>,
	document.getElementById('root')
)
