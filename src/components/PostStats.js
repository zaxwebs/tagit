import React from 'react'
import { inLimit } from './../helpers/general'
import extract from 'mention-hashtag'
import { Badge } from 'react-bootstrap'

export const tagCount = content => {
	return extract(content, '#').length
}

export const characterCount = content => {
	return content.length
}

const validCount = (count, max) => {
	if (!max) {
		// if max is a falsy then consider there's no limit
		return true
	} else {
		return inLimit(count, max)
	}
}

export const validCharacterCount = (count, max) => {
	return validCount(count, max)
}

export const validTagCount = (count, max) => {
	return validCount(count, max)
}

export const validCounts = (characters, tags, maxCharacters, maxTags) => {
	return validCharacterCount(characters, maxCharacters, tags, maxTags)
}

const PostStats = props => {
	const { content, characters = false, tags = false } = props
	return (
		<div className="stats">
			<Badge
				pill
				variant={
					validCharacterCount(characterCount(content), characters)
						? 'primary'
						: 'danger'
				}
			>
				Characters - {characterCount(content).toLocaleString()}
				{characters && ' / ' + characters.toLocaleString()}
			</Badge>
			<Badge pill variant="primary">
				Tags - {tagCount(content).toLocaleString()}
				{tags && ' / ' + tags.toLocaleString()}
			</Badge>
		</div>
	)
}

export default PostStats
