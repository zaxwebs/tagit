import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { AppProvider } from './contexts/AppContext'
import NetworkStage from './components/Stages/NetworkStage'

const App = () => {
	return (
		<AppProvider>
			<Container>
				<Row>
					<Col md={6} className="pt-5">
						<NetworkStage />
					</Col>
				</Row>
			</Container>
		</AppProvider>
	)
}

export default App
