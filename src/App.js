import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { AppProvider } from './contexts/AppContext'
import NetworkStage from './components/Stages/NetworkStage'
import ContentStage from './components/Stages/ContentStage'
import CategoryStage from './components/Stages/CategoryStage'
import PostStage from './components/Stages/PostStage'

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
					<Col md={6} className="pt-5">
						<PostStage />
					</Col>
				</Row>
			</Container>
		</AppProvider>
	)
}

export default App
