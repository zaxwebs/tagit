import React, { useContext } from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import { Form } from 'react-bootstrap'

const CategoryStage = () => {
	const { categories, handleCategorySelect, selectedCategory } = useContext(
		AppContext
	)

	return (
		<Stage number="3" title="Select a Category">
			<Form onSubmit={e => e.preventDefault()}>
				<Form.Group>
					{Object.keys(categories).map(categoryID => {
						const category = categories[categoryID]

						return (
							<div key={categoryID} className="mb-2">
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
							</div>
						)
					})}
				</Form.Group>
			</Form>
		</Stage>
	)
}

export default CategoryStage
