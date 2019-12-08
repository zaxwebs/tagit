import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import AppContext from '../contexts/AppContext'
import extract from 'mention-hashtag'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PostStats, { validCounts } from './PostStats'
import { MdContentCopy } from 'react-icons/md'

const PostTagged = props => {
	const { content, categories, selectedCategory } = useContext(AppContext)
	const { characters = false, tags = false } = props

	const category = categories[selectedCategory]

	let characterCount = content.length
	let tagCount = extract(content, '#').length

	const taggifyPost = () => {
		let tagged = content
		const tagsArray = category.tags.split(' ')
		tagsArray.forEach(tag => {
			const newCharacterCount = characterCount + tag.length + 1 // + 1 for pre-padding a space or new line
			const newTagCount = tagCount + 1
			if (validCounts(newCharacterCount, newTagCount, characters, tags)) {
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
				<PostStats
					content={taggifiedPost}
					characters={characters}
					tags={tags}
				/>
				<Form.Control
					as="textarea"
					rows="8"
					value={taggifiedPost}
					onChange={() => {}}
					isInvalid={!validCounts(characterCount, tagCount, characters, tags)}
				/>
				<CopyToClipboard text={taggifiedPost}>
					<button className="btn btn-primary btn-sm mt-2 mb-4">
						<MdContentCopy /> Copy to Clipboard
					</button>
				</CopyToClipboard>
			</Form.Group>
		</Form>
	)
}

export default PostTagged
