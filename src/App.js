import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import NetworkStage from './components/Stages/NetworkStage'
import ContentStage from './components/Stages/ContentStage'
import CategoryStage from './components/Stages/CategoryStage'
import PostStage from './components/Stages/PostStage'
import ThemeContext from './contexts/ThemeContext'
import Menu from './components/Menu'

const App = () => {
	const { getThemeClass } = useContext(ThemeContext)
	return (
		<div className={getThemeClass()}>
			<Menu />
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
		</div>
	)
}

export default App
