import React from 'react'
import { Form } from 'react-bootstrap'
import AppContext from './../contexts/AppContext'

const PostTagger = props => {
	return (
		<AppContext.Consumer>
			{({ content, categories, selectedCategory }) => {
				const category = categories[selectedCategory]

				let characterCount = content.length
				let tagCount = 0

				const isInCountLimits = (characterCount = 0, tagCount = 0) => {
					if (!props.tags) {
						return characterCount < props.characters
					} else {
						if (characterCount < props.characters && tagCount < props.tags) {
							return true
						} else {
							return false
						}
					}
				}

				const taggifyPost = () => {
					let tagged = content
					const tags = category.tags.split(' ')
					tags.forEach(tag => {
						const newCharacterCount = characterCount + tag.length + 1 // + 1 for pre-padding a space or new line
						const newTagCount = tagCount + 1
						if (isInCountLimits(newCharacterCount, newTagCount)) {
							//increment counters
							characterCount += tag.length + 1
							tagCount += 1
							//add tag
							if (tagged === '') {
								tagged = tagged + tag
							} else {
								if (tagged === content) {
									tagged = tagged + '\n' + tag
								} else {
									tagged = tagged + ' ' + tag
								}
							}
						}
					})
					return tagged
				}

				const taggifiedPost = taggifyPost()

				return (
					<Form>
						<Form.Group>
							<label className="font-weight-bold">{props.label}</label>
							<Form.Control
								as="textarea"
								rows="8"
								value={taggifiedPost}
								onChange={() => {}}
							/>
						</Form.Group>
					</Form>
				)
			}}
		</AppContext.Consumer>
	)
}

export default PostTagger
