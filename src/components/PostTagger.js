import React from 'react'
import { Form } from 'react-bootstrap'
import AppContext from './../contexts/AppContext'
import extract from 'mention-hashtag'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const PostTagger = props => {
	return (
		<AppContext.Consumer>
			{({ content, categories, selectedCategory }) => {
				const category = categories[selectedCategory]

				let characterCount = content.length
				let tagCount = extract(content, '#').length

				const validCharacterCount = (characterCount = 0) => {
					if (!props.characters) {
						// if props.characters is falsy, make character limit infinite
						return true
					} else {
						return characterCount < props.characters
					}
				}

				const validTagCount = (tagCount = 0) => {
					if (!props.tags) {
						// if props.tags is falsy, make tags limit infinite
						return true
					} else {
						return tagCount < props.tags
					}
				}

				const validCounts = (characterCount = 0, tagCount = 0) => {
					return validCharacterCount(characterCount) && validTagCount(tagCount)
				}

				const taggifyPost = () => {
					let tagged = content
					const tags = category.tags.split(' ')
					tags.forEach(tag => {
						const newCharacterCount = characterCount + tag.length + 1 // + 1 for pre-padding a space or new line
						const newTagCount = tagCount + 1
						if (validCounts(newCharacterCount, newTagCount)) {
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
					<Form onSubmit={e => e.preventDefault()}>
						<Form.Group>
							<label className="font-weight-bold">{props.label}</label>
							<Form.Control
								as="textarea"
								rows="8"
								value={taggifiedPost}
								onChange={() => {}}
							/>
							<CopyToClipboard text={taggifiedPost}>
								<button className="btn btn-primary btn-sm mt-2 mb-4">
									Copy to Clipboard
								</button>
							</CopyToClipboard>
						</Form.Group>
					</Form>
				)
			}}
		</AppContext.Consumer>
	)
}

export default PostTagger
