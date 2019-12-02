import React, { useState, useEffect } from 'react'
import './App.css'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import { initialNetworks, initialCategories } from './data'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const App = () => {
	const [post, setPost] = useState('')
	const [networks, setNetworks] = useState(initialNetworks)
	//const [categories, setCategories] = useState(initialCategories)
	const categories = initialCategories
	const [selectedCategory, setSelectedCategory] = useState(
		categories[0].id.toString()
	)
	const [maxPostSize, setMaxPostSize] = useState(null)

	const getIndex = (value, arr, prop) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][prop] === value) {
				return i
			}
		}
		return -1 //to handle the case where the value doesn't exist
	}

	const getCategoryObject = (id = selectedCategory) => {
		return categories.filter(category => category.id.toString() === id)[0]
	}

	const toggleNetworkSelect = e => {
		const { name } = e.target
		const updatedNetworks = [...networks]
		const index = getIndex(name, updatedNetworks, 'name')
		updatedNetworks[index] = {
			...updatedNetworks[index],
			selected: !updatedNetworks[index].selected
		}
		setNetworks(updatedNetworks)
		determineMaxPostSize()
	}

	const handlePostChange = e => {
		setPost(e.target.value)
	}

	const handleCategoryChange = e => {
		setSelectedCategory(e.target.value)
	}

	const determineMaxPostSize = () => {
		let lowest = null
		networks.forEach(network => {
			if (network.selected === true) {
				if (lowest === null) {
					lowest = network.characters
				}
				if (network.characters < lowest) {
					lowest = network.characters
				}
			}
		})
		setMaxPostSize(lowest)
	}

	const exceedsCharacterLimit = limit => {
		if (limit === null) {
			return false
		}
		return post.length > limit ? true : false
	}

	const taggify = limit => {
		let separator = ''
		if (post !== '') separator = '\n'
		if (limit === null) {
			return post + separator + getCategoryObject().tags
		}
		let taggified = post
		const tags = getCategoryObject().tags.split(' ')
		tags.forEach((tag, index) => {
			if (taggified.length + tag.length + 1 < limit) {
				let separator = ' '
				if (index === 0) separator = '\n' //reset to new line if first tag
				if (taggified === '') separator = '' //reset to empty if no post
				taggified = taggified + separator + tag
			}
		})
		return taggified
	}

	useEffect(() => {
		determineMaxPostSize()
	})

	return (
		<Container>
			<Row>
				<Col md={6} className="pt-5">
					<div id="intro">
						<h1>Welcome to TagIt!</h1>
						<p>
							A tool to help you add hashtags to your posts while managing
							character limits for different social networks.
						</p>
						<p>
							TagIt automatically calculates just the right amount of hashtags
							to add to your post for each of the selected social networks
							keeping the character limit in check.
						</p>
					</div>
					<div>
						<Form>
							<Form.Group>
								<Form.Label className="font-weight-bold">
									1. Select Social Networks
								</Form.Label>
								{networks.map(network => {
									return (
										<div key={network.name} className="mb-2">
											<Form.Check
												name={network.name}
												checked={network.selected}
												label={network.name}
												onChange={toggleNetworkSelect}
											/>
											<small className="form-text text-muted">
												Allows up to {network.characters.toLocaleString()}{' '}
												characters
												{network.tags && ` with up to ${network.tags} tags`}.
											</small>
										</div>
									)
								})}
							</Form.Group>
							<Form.Group>
								<Form.Label className="font-weight-bold">
									2. Enter Your Post Text Here
									{maxPostSize && (
										<small
											className={
												exceedsCharacterLimit(maxPostSize)
													? 'text-danger'
													: 'text-success'
											}
										>
											{' '}
											({post.length.toLocaleString()}/
											{maxPostSize.toLocaleString()})
										</small>
									)}
								</Form.Label>
								<Form.Control
									as="textarea"
									rows="4"
									value={post}
									onChange={handlePostChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label className="font-weight-bold">
									3. Select Category
								</Form.Label>
								{categories.map(category => {
									return (
										<div key={category.name}>
											<Form.Check
												type="radio"
												label={category.name}
												name="category"
												checked={
													selectedCategory === category.id.toString()
														? true
														: false
												}
												value={category.id}
												onChange={handleCategoryChange}
											/>
										</div>
									)
								})}
								<Alert className="mt-3" variant="info">
									More categories are coming soon.
								</Alert>
							</Form.Group>
						</Form>
					</div>
				</Col>
				<Col md={6} className="pt-5">
					<Form.Label className="font-weight-bold mb-3">
						4. Copy Paste Tagged Posts to Respective Social Networks
					</Form.Label>
					{networks.map(network => {
						if (network.selected) {
							const taggified = taggify(network.characters)
							return (
								<Form.Group key={network.name} className="pb-3">
									<Form.Label className="font-weight-bold">
										{network.name} Post{' '}
										{taggified.length > network.characters && (
											<small className="text-danger">
												(Your post text exceeds character limit by{' '}
												{taggified.length - network.characters}.)
											</small>
										)}
									</Form.Label>
									<Form.Control
										as="textarea"
										rows="10"
										value={taggified}
										onChange={() => {}}
									/>
									<CopyToClipboard text={taggified}>
										<button className="btn btn-primary btn-sm mt-2">
											Copy to Clipboard
										</button>
									</CopyToClipboard>
								</Form.Group>
							)
						} else {
							return null //since arrow functions expect return value at end
						}
					})}
					<Form.Group className="pb-3">
						<Form.Label className="font-weight-bold">Taggified Post</Form.Label>
						<Form.Control
							as="textarea"
							rows="10"
							value={taggify(null)}
							onChange={() => {}}
						/>
						<CopyToClipboard text={taggify(null)}>
							<button className="btn btn-primary btn-sm mt-2">
								Copy to Clipboard
							</button>
						</CopyToClipboard>
					</Form.Group>
				</Col>
			</Row>
		</Container>
	)
}

export default App
