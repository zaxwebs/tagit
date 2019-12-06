import React from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import { Form } from 'react-bootstrap'

const ContentStage = () => {
	return (
		<AppContext.Consumer>
			{({ content, handleContentChange }) => {
				return (
					<Stage number="2" title="Enter Your Post Text Here">
						<Form onSubmit={e => e.preventDefault()}>
							<Form.Group>
								<Form.Control
									as="textarea"
									rows="4"
									value={content}
									onChange={handleContentChange}
								/>
							</Form.Group>
						</Form>
					</Stage>
				)
			}}
		</AppContext.Consumer>
	)
}

export default ContentStage
