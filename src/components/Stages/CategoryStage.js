import React from 'react'
import Stage from '../Stage'
import AppContext from '../../contexts/AppContext'
import { Form } from 'react-bootstrap'

const CategoryStage = () => {
	return (
		<AppContext.Consumer>
			{({ categories, handleCategorySelect, selectedCategory }) => {
				return (
					<Stage number="3" title="Select a Category">
						<Form>
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
			}}
		</AppContext.Consumer>
	)
}

export default CategoryStage
