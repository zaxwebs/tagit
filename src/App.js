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
			<div className="cover">
				<Container>
					TagIt automatically calculates just the right amount of hashtags to
					add to your post for each of the selected social networks keeping the
					character & hashtag limits in check.
				</Container>
			</div>
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
