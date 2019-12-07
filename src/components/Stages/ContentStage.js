import React, { useContext } from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import { Form } from 'react-bootstrap'
import PostStats from './../PostStats'

const ContentStage = () => {
	const { content, handleContentChange } = useContext(AppContext)

	return (
		<Stage number="2" title="Enter Your Post Text Here">
			<Form onSubmit={e => e.preventDefault()}>
				<Form.Group>
					<PostStats content={content} />
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
}

export default ContentStage
