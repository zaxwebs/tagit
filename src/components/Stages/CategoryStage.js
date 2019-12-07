import React, { useContext } from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import { Form, Row, Col } from 'react-bootstrap'

const CategoryStage = () => {
	const { categories, handleCategorySelect, selectedCategory } = useContext(
		AppContext
	)

	return (
		<Stage number="3" title="Select a Category">
			<Form onSubmit={e => e.preventDefault()}>
				<Form.Group>
					<Row>
						{Object.keys(categories).map(categoryID => {
							const category = categories[categoryID]

							return (
								<Col xs={6} key={categoryID} className="mb-2">
									<Form.Check
										type="radio"
										id={'category-' + categoryID}
										checked={categoryID === selectedCategory}
										label={category.name}
										value={categoryID}
										onChange={() => {
											handleCategorySelect(categoryID)
										}}
									/>
								</Col>
							)
						})}
					</Row>
				</Form.Group>
			</Form>
		</Stage>
	)
}

export default CategoryStage
