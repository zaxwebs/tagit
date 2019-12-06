import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import NetworkStage from './components/Stages/NetworkStage'
import ContentStage from './components/Stages/ContentStage'
import CategoryStage from './components/Stages/CategoryStage'
import PostStage from './components/Stages/PostStage'
import ThemeContext from './contexts/ThemeContext'

const App = () => {
	const { getThemeClass, toggleDark } = useContext(ThemeContext)
	return (
		<div className={getThemeClass()}>
			<Container fluid={true}>
				<button
					className="btn btn-primary btn-small"
					onClick={() => toggleDark()}
				>
					Toggle Theme
				</button>
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
		</div>
	)
}

export default App
