import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { AppProvider } from './contexts/AppContext'
import NetworkStage from './components/Stages/NetworkStage'
import ContentStage from './components/Stages/ContentStage'
import CategoryStage from './components/Stages/CategoryStage'

const App = () => {
	return (
		<AppProvider>
			<Container>
				<Row>
					<Col md={6} className="pt-5">
						<NetworkStage />
						<ContentStage />
						<CategoryStage />
					</Col>
				</Row>
			</Container>
		</AppProvider>
	)
}

export default App
