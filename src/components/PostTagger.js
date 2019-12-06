import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import AppContext from './../contexts/AppContext'
import extract from 'mention-hashtag'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const PostTagger = props => {
	const { content, categories, selectedCategory } = useContext(AppContext)

	const category = categories[selectedCategory]

	let characterCount = content.length
	let tagCount = extract(content, '#').length

	const validCharacterCount = (count = characterCount) => {
		if (!props.characters) {
			// if props.characters is falsy, make character limit infinite
			return true
		} else {
			return count < props.characters
		}
	}

	const validTagCount = (count = tagCount) => {
		if (!props.tags) {
			// if props.tags is falsy, make tags limit infinite
			return true
		} else {
			return count < props.tags
		}
	}

	const validCounts = (characters = characterCount, tags = tagCount) => {
		return validCharacterCount(characters) && validTagCount(tags)
	}

	const invalidAlertText = () => {
		let message = 'Your post exceeds'
		if (!validCharacterCount()) {
			console.log('OK')
			const exceeding = characterCount - props.characters
			message = message + ' character limit by ' + exceeding
			if (!validTagCount()) {
				message = message + ' &'
			}
		}
		if (!validTagCount()) {
			const exceeding = tagCount - props.tags
			message = message + ' tag limit by ' + exceeding
		}
		message = message + '.'
		return message
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
				{!validCounts() && (
					<>
						<br />
						<small className="text-danger">{invalidAlertText()}</small>
					</>
				)}
				<Form.Control
					as="textarea"
					rows="8"
					value={taggifiedPost}
					onChange={() => {}}
					isInvalid={!validCounts()}
				/>
				<CopyToClipboard text={taggifiedPost}>
					<button className="btn btn-primary btn-sm mt-2 mb-4">
						Copy to Clipboard
					</button>
				</CopyToClipboard>
			</Form.Group>
		</Form>
	)
}

export default PostTagger
