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
			<Container fluid={true}>
				<Row>
					<Col lg={4} className="pt-5">
						<NetworkStage />
						<ContentStage />
						<CategoryStage />
					</Col>
					<Col lg={8} className="pt-5">
						<PostStage />
					</Col>
				</Row>
			</Container>
		</AppProvider>
	)
}

export default App
